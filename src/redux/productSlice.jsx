import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  products: [], // Array to hold product data
}

const productSlice= createSlice({
  name: "product",
    initialState,
    reducers: {

    setProducts(state, action) {
      state.products = action.payload; // Set the products in the state to the payload from the action
    }
    },
})

export const { setProducts } = productSlice.actions; // Export the action to set products
export default productSlice.reducer; // Export the reducer to be used in the store