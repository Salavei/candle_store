import {configureStore} from "@reduxjs/toolkit";
import {combinationSlice} from '../Redux/createSlice'


export const store = configureStore({
    reducer: {
        counter: combinationSlice,
    }
})