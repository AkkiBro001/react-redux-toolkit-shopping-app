import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSilcer"
import productReducer from "./ProductSilcer"
const Store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})

export default Store;