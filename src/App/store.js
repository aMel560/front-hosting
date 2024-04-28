import { configureStore } from "@reduxjs/toolkit";
import { fruitsSlice } from "./slices/fruitsSlice";
import { cartSlice } from "./slices/cartSlice";
import { apiSlice } from "./slices/ApiSlice";
import { userSlice } from "./slices/userSlice";
// import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  reducer: {
    fruits: fruitsSlice.reducer,
    cart: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(apiSlice.middleware),
});
