import { createSlice } from "@reduxjs/toolkit";

const CartSlicer = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        add(state, action){
            state.push({...action.payload, cartCounter: action.payload.cartCounter + 1})
        },

        remove(state, action){
            return state.filter(product => product.id !== action.payload)
        },

        incrementCartCounter(state, action){
            return state.map(product => product.id === action.payload ? {...product, cartCounter: product.cartCounter+1} : product)
        },

        decrementCartCounter(state, action){
            return state.map(product => product.id === action.payload ? {...product, cartCounter: product.cartCounter-1} : product)
        },
    }
})

export const {add, remove, incrementCartCounter, decrementCartCounter} = CartSlicer.actions;
export default CartSlicer.reducer;