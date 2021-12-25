import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

// const user = localStorage.getItem("user")? JSON.parse(localStorage.getItem('user')):null;
const user=""
const initialState = localStorage.getItem("user")
  ? { isLoggedIn: true, errorMessage: {} }
  : { isLoggedIn: false, errorMessage: {} }


export const signUpSlice = createSlice({
  name: 'sign-up',
  initialState,
  reducers: {
    signUp: (state, action) => {
      console.log(action.payload);
      return { ...state, isLoggedIn: true, errorMessage: {} }
    },
    showErrorMessages: (state, action) => {
      return { ...state, isLoggedIn: false, errorMessage: action.payload }
    }
  },
})

// Action creators are generated for each case reducer function
export const { signUp, showErrorMessages } = signUpSlice.actions

export default signUpSlice.reducer