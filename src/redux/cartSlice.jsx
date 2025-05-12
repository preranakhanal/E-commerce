import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  products: [], // Array to hold product data
}

const cartSlice= createSlice({
  name: "cart",
    initialState,
    reducers: {
    
    }
    },
)

 // Export the action to set products
export default cartSlice.reducer; // Export the reducer to be used in the store