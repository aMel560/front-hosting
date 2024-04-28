import { configureStore, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")),
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
