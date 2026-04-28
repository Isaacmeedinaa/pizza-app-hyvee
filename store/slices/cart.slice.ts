import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartInitialState, { AddToCartPayloadAction } from "./cart.types";

const initialState: CartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayloadAction>) => {
      // I have to check if the item is already in the cart, if it is, I will increase the quantity, otherwise I will add it to the cart

      state.items.push(action.payload.item);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
