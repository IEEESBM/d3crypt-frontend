import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from './SignUpSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer
  },
})