import { configureStore, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState:
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(
      '{"user":{"_id":"65fb641023e9bd5beb4be325","email":"amelrazini@gmail.com","password":"azerty","name":"amel","role":"admin","orders":[],"__v":0}}'
    ),
  reducers: {
    setUser: (state, action) => {
      console.log(state, "state");
      localStorage.setItem("user", JSON.stringify(action.payload));
      return (state = action.payload);
    },
    logout: (state) => {
      localStorage.removeItem("user");
      return (state = null);
    },
  },
});
export const { logout, setUser } = userSlice.actions;
