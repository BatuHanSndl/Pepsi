import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    adverts: []
}

export const getAllAdverts = createAsyncThunk("adverts", async () => {
    const response = await axios.get('./src/api/advert.json');
    return response.data;
})

const advertSlice = createSlice({
    name: "adverts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllAdverts.fulfilled, (state, action) => {
            state.adverts = action.payload
        })
    }
});


export const { } = advertSlice.actions

export default advertSlice.reducer