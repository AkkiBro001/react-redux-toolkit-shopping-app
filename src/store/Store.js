import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSilcer"
const Store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default Store;