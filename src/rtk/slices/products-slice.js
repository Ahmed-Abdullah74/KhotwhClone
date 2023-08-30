import { createSlice } from "@reduxjs/toolkit";
import data from "../../Data/menProductsdata.json";

const initialState = {
  products: data,
};

export const productsSilce = createSlice({
  initialState,
  name: "product",
  reducers: {},
});

export const setProducts = (state) => state.product.products;
export default productsSilce.reducer;
