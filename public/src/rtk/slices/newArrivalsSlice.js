// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import newArrivalsData from "../../Data/newArrivalsData.json";

// export const fetchnewArrivals = createAsyncThunk(
//   "newArrivalsSlice/fetchnewArrivals",
//   async () => {
//     const res = await fetch("../../Data/newArrivalsData.json");
//     const data = await res.json();

//     return data.newArrivals;
//   }
// );

// const newArrivalsSlice = createSlice({
//   initialState: [],
//   name: "newArrivalsSlice",
//   reducer: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchnewArrivals.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export const {} = newArrivalsSlice.actions;

// export default newArrivalsSlice.reducer;
