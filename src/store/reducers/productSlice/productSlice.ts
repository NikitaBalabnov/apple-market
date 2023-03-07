import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductSlice } from "./types";
import { IProduct } from "../../../types/IProduct";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IProduct[]>(
        "http://localhost:4001/products"
      );
      return response.data as IProduct[];
    } catch (er) {
      return rejectWithValue("Products not found");
    }
  }
);

const initialState: IProductSlice = {
  products: [],
  isLoading: false,
  isError: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = "";
      state.products = [];
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.isLoading = false;
        state.isError = "";
        state.products = [...action.payload];
      }
    );
    builder.addCase(
      fetchProducts.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = action.payload;
      }
    );
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
