import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  products: [], // Array to hold product data
  totalQuantity: 0, // Total quantity of products in the cart
  totalPrice: 0, // Total amount of products in the cart
}

const cartSlice= createSlice({
  name: "cart",
    initialState,
    reducers: {
      addToCart(state, action) {
        const newItem = action.payload;
        const itemIndex = state.products.find((item) => item.id === newItem.id)
        if (itemIndex) {
          itemIndex.quantity += 1;
          itemIndex.totalPrice += newItem.price // Increase quantity if item already exists
        } else {
          state.products.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            image: newItem.image
             // Set initial total price
          }); // Add new item with quantity 1
        }
        state.totalPrice += newItem.price; // Increase total quantity
        state.totalQuantity++; // Increase total price

    }
    },
  })


  export const { addToCart } = cartSlice.actions; // Export the action to add items to the cart

 // Export the action to set products

export default cartSlice.reducer; // Export the reducer to be used in the store