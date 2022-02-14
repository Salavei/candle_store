import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: '',
    id: "",
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: ""

}

export const UserSlice = createSlice({
    name: 'checkUser',
    initialState,
    reducers: {
        checkUser: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.user = action.payload
        },
        userName: (state, action) => {
            state.username = action.payload
        },
        userId: (state, action) => {
            state.id = action.payload
        },
        firstName: (state, action) => {
            state.first_name = action.payload
        },
        lastName: (state, action) => {
            state.last_name = action.payload
        },
        eMail: (state, action) => {
            state.email = action.payload
        },
        phoneNumber: (state, action) => {
            state.phone_number = action.payload
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { checkUser, decrement, userName,userId,firstName, lastName,eMail ,phoneNumber,  incrementByAmount } = UserSlice.actions

export const selectUser = state => state.user;

export default UserSlice.reducer