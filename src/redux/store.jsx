import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import advertReducer from './advertSlice'

export const store = configureStore({
    reducer: {
        urunler: productReducer,
        duyurular: advertReducer
    },
})