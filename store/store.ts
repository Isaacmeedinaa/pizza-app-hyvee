import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.slice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
