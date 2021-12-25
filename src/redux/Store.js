import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from './SignUpSlice';
import signInReducer from "./SignInSlice";
export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
  },
});
