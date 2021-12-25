import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from './SignUp';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer
  },
})