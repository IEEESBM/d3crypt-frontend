import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const user = localStorage.getItem("user")? JSON.parse(localStorage.getItem('user')):null;
const user = "";
const initialState = localStorage.getItem("user")
  ? { isLoggedIn: true, errorMessage: {} }
  : { isLoggedIn: false, errorMessage: {} };

export const signInSlice = createSlice({
  name: "sign-in",
  initialState,
  reducers: {
    signUp: (state, action) => {
      console.log(action.payload);
      return { ...state, isLoggedIn: true, errorMessage: {} };
    },
    showErrorMessages: (state, action) => {
      return { ...state, isLoggedIn: false, errorMessage: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, showErrorMessages } = signInSlice.actions;

export default signInSlice.reducer;
