import { createSlice } from '@reduxjs/toolkit'


// const user = localStorage.getItem("user")? JSON.parse(localStorage.getItem('user')):null;
const user=""
const initialState = localStorage.getItem("user")
  ? {  errorMessage: {} , isLoggedIn: false}
  : { errorMessage: {}, isLoggedIn: false}


export const signUpSlice = createSlice({
  name: 'sign-up',
  initialState,
  reducers: {
    signUp: (state, action) => {
      console.log(action.payload);
      return { ...state,  errorMessage: {}, isLoggedIn:false }
    },
    showErrorMessages: (state, action) => {
      return { ...state, errorMessage: action.payload, isLoggedIn:false}
    },
    verified: (state, action ) => {
      console.log(action.payload);
      return {...state, errorMessage:{}, isLoggedIn:true}
    }
  },
})

// Action creators are generated for each case reducer function
export const { signUp, showErrorMessages, verified } = signUpSlice.actions

export default signUpSlice.reducer