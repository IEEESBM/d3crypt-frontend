import { createSlice } from "@reduxjs/toolkit";

const jwt = JSON.parse(localStorage.getItem("jwt"));

const initialState = jwt?{
  SignUpErrorMessage: {},
  SignInErrorMessage: {},
  isLoggedIn: true,
}:{
  SignUpErrorMessage: {},
  SignInErrorMessage: {},
  isLoggedIn: false,
};


export const signUpSlice = createSlice({
  name: "sign-up",
  initialState,
  reducers: {
    signUp: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        SignUpErrorMessage: {},
        SignInErrorMessage: {},
        isLoggedIn: false,
      };
    },
    showErrorMessagesSignUp: (state, action) => {
      return {
        ...state,
        SignUpErrorMessage: action.payload,
        SignInErrorMessage: {},
        isLoggedIn: false,
      };
    },
    verified: (state, action) => {
      return {
        ...state,
        SignUpErrorMessage: {},
        SignInErrorMessage: {},
        isLoggedIn: true,
      };
    },
    signIn: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        SignUpErrorMessage: {},
        SignInErrorMessage: {},
        isLoggedIn: true,
      };
    },
    showErrorMessagesSignIn: (state, action) => {
      return {
        ...state,
        SignUpErrorMessage: {},
        SignInErrorMessage: action.payload,
        isLoggedIn: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  signUp,
  showErrorMessagesSignUp,
  verified,
  signIn,
  showErrorMessagesSignIn,
} = signUpSlice.actions;

export default signUpSlice.reducer;
