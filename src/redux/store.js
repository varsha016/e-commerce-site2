import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'




const store = configureStore({
    reducer: {
        allProduct: productSlice,

    }
})
export default store