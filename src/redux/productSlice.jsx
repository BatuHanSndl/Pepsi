import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],

}

export const getAllProducts = createAsyncThunk("products", async () => {
    const response = await axios.get('./src/api/pepsi.json');
    return response.data;
})


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
    }
});


export const { } = productSlice.actions

export default productSlice.reducer