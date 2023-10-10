// src/features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image_url } = action.payload;
      const existingProduct = state.find((product) => product.id === id);

      if (existingProduct) {
        // If the product already exists in the cart, increase its quantity
        existingProduct.quantity += 1;
      } else {
        // If it's a new product, add it to the cart
        state.push({ id, name, price, quantity: 1, image_url });
      }
    },
    decreaseFromCart: (state, action) => {
      const productId = action.payload;
      const existingProductIndex = state.findIndex(
        (product) => product.id === productId
      );

      if (existingProductIndex !== -1) {
        const existingProduct = state[existingProductIndex];
        if (existingProduct.quantity > 1) {
          // If the product has a quantity greater than 1, decrease its quantity
          existingProduct.quantity -= 1;
        } else {
          // If the product has a quantity of 1, remove it from the cart
          state.splice(existingProductIndex, 1);
        }
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingProductIndex = state.findIndex(
        (product) => product.id === productId
      );
      state.splice(existingProductIndex, 1);
    },
  },
});

export const { addToCart, decreaseFromCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
