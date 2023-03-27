import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'



const getProductAction = createAsyncThunk("products/get", async ({ limit, page }) => {
    try {
        console.log("page", page)
        console.log("limit", limit)
        const { data: { products } } = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page}`

        )

        console.log(products);

        return products

    } catch (error) {
        return error.message
    }
})
export const getSingleProductAction = createAsyncThunk("singleProducts/get", async (id, { getState, rejectWithValue }) => {
    try {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`)
        // console.log(data);
        return data

    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const deleteSingleProductAction = createAsyncThunk("single/delete", async (id, { getState, rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`https://dummyjson.com/products/${id}`)
        // console.log(data);
        return

    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const updateProductAction = createAsyncThunk("product/update", async (edit, { getState, rejectWithValue }) => {
    try {

        const { data } = await axios.put(`https://dummyjson.com/products/${edit.id}`, JSON.stringify(edit))
        return data
        console.log(data);

    } catch (error) {
        return rejectWithValue(error.message)
    }
})





export default getProductAction
