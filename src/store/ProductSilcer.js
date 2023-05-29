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

export const {setProduct, setStatus} = ProductSilcer.actions;
export default ProductSilcer.reducer;

//Normal Thunks
export const fetchProductsWithThunks = createAsyncThunk("product/fetch", async function () {
    const result = await fetch("https://fakestoreapi.com/products/");
    const data = await result.json()
    return data;
})


