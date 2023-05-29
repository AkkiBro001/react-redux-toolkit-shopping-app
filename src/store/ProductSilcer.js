import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUS = {
    IDEL: "idel",
    LOADING: "loading",
    ERROR: "error",
}

const ProductSilcer = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDEL
    },
    reducers: {
        incrementProductCartCounter(state, action){
            state.data = state.data.map(product => product.id === action.payload ? {...product, cartCounter: product.cartCounter+1} : product)
        },

        decrementProductCartCounter(state, action){
            state.data = state.data.map(product => product.id === action.payload ? {...product, cartCounter: product.cartCounter-1} : product)
        },

        resetCartProductCounter(state, action){
            state.data = state.data.map(product => product.id === action.payload ? {...product, cartCounter: 0} : product)
        }
    }, 

    extraReducers: (builder) => {
        builder
        // eslint-disable-next-line no-unused-vars
        .addCase(fetchProductsWithThunks.pending, (state, action) => {
            state.status = STATUS.LOADING;
        })
        .addCase(fetchProductsWithThunks.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUS.IDEL;
        })
        // eslint-disable-next-line no-unused-vars
        .addCase(fetchProductsWithThunks.rejected, (state, action) => {
            state.status = STATUS.ERROR;
        })
    }
})

export const {setProduct, setStatus, incrementProductCartCounter, decrementProductCartCounter, resetCartProductCounter} = ProductSilcer.actions;
export default ProductSilcer.reducer;

//Normal Thunks
export const fetchProductsWithThunks = createAsyncThunk("product/fetch", async function () {
    const result = await fetch("https://fakestoreapi.com/products/");
    const data = await result.json()
    return data.map(item => ({...item, cartCounter: 0}));
})


