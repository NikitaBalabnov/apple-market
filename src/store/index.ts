import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice/cartSlice";
import productSlice from "./reducers/productSlice/productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
