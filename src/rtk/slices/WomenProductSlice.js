import { createSlice } from "@reduxjs/toolkit";
import womenData from "../../Data/WomenProductsData.json";

const initialState = {
  womenProducts: womenData,
};

export const womenproductsSilce = createSlice({
  initialState,
  name: "product",
  reducers: {},
});

export const setWomenProducts = (state) => state.womenProducts.womenProducts;
export default womenproductsSilce.reducer;
