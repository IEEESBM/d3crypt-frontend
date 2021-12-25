import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./SignUp";
import signInReducer from "./Signin";
export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
  },
});
