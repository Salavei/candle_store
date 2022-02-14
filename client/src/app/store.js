import { configureStore } from '@reduxjs/toolkit'
import UserReducer from  '../Redux/slice'

export default configureStore({
    reducer: {
        counter: UserReducer
    }
})

