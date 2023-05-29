import { createSlice } from "@reduxjs/toolkit";

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
        setProduct (state, action) {
            state.data = action.payload
        },

        setStatus (state, action) {
            state.status = action.payload
        }
    }
})

export const {setProduct, setStatus} = ProductSilcer.actions;
export default ProductSilcer.reducer;

//Normal Thunks
export function fetchProductsWithThunks () {
    // eslint-disable-next-line no-unused-vars
    return async function (dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const result = await fetch("https://fakestoreapi.com/products/")
            const data = await result.json()
            dispatch(setProduct(data))
            dispatch(setStatus(STATUS.IDEL))
        }catch(err){
            console.log(err)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}
