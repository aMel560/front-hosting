import { createSlice } from "@reduxjs/toolkit";
import { list } from "../../pages/Products";

export const fruitsSlice = createSlice({
  name: "fruits",
  initialState: list,
  reducers: {},
});
export const { addToCart } = fruitsSlice.actions;
