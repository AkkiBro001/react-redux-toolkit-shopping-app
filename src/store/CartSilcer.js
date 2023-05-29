import { createSlice } from "@reduxjs/toolkit";

const CartSlicer = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        add(state, action){
            state.push(action.payload)
        },

        remove(state, action){
            return state.filter(product => product.id !== action.payload)
        }
    }
})

export const {add, remove} = CartSlicer.actions;
export default CartSlicer.reducer;