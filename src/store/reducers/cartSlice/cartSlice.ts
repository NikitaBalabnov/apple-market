import { ICartProduct, IProduct } from "./../../../types/IProduct";
import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "./types";

const initialState: ICart = {
  productCount: 0,
  addedProducts: [],
  isError: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartLoading: (state) => {
      const data = localStorage.getItem("added products") || "[]";
      const addedProducts = JSON.parse(data);
      state.addedProducts = [...addedProducts];
      state.isError = "";
    },
    addToCart: (state, action: PayloadAction<IProduct & ICartProduct>) => {
      const data = localStorage.getItem("added products") || "[]";
      const addedProducts = JSON.parse(data);
      const addedProductsWithNewProduct: IProduct[] = [
        ...addedProducts,
        action.payload,
      ];
      localStorage.setItem(
        "added products",
        JSON.stringify(addedProductsWithNewProduct)
      );
      state.addedProducts = [...state.addedProducts, action.payload];
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const data = localStorage.getItem("added products") || "[]";
      let addedProductsWithoutTargetProduct: IProduct[];
      const addedProducts: IProduct[] = JSON.parse(data);
      addedProductsWithoutTargetProduct = addedProducts.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem(
        "added products",
        JSON.stringify(addedProductsWithoutTargetProduct)
      );
      state.addedProducts = [...addedProductsWithoutTargetProduct];
    },
  },
});
export const { addToCart, removeFromCart, cartLoading } = cartSlice.actions;
export default cartSlice.reducer;
