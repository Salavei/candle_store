import {createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
   type: 'figure' | 'default',
    color: 'grey' | 'orange' | 'black',
    volume: '100' | '200',
    smell: 'apple' | 'chimney' | 'coconut' | 'berry' | 'forest',
    price: 0
}

export const combinationSlice = createSlice({
    name: 'her',
    initialState,
    reducers:{
        changeTypeDefault:(state) => {
            state.type = 'default'
},
        changeTypeFigure:(state) => {
            state.type = 'figure'
        },
        changeColorGrey:(state) => {
            state.color = 'grey'
        },
    }
})


export const {changeTypeDefault,changeTypeFigure, changeColorGrey } = createSlice.actions;


export default combinationSlice.reducer;