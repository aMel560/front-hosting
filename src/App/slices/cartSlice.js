import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      if (!state.find((item) => item.title === action.payload.title)) {
        state.push(action.payload);
      }
    },

    addProduct: (state, action) => {
      console.log(action.payload);
      state.map((item) => {
        if (item.title === action.payload) {
          item.count += 1;
        }
      });
    },
    deleteProduct: (state, action) => {
      return state.filter((item) => item.title !== action.payload);
    },
    removeProduct: (state, action) => {
      state.map((item) => {
        if (item.title === action.payload) {
          item.count -= 1;
        }
      });
    },
  },
});
export const { addToCart, deleteProduct, addProduct, removeProduct } =
  cartSlice.actions;
