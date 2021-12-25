import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, errorMessage: '' }
  : { isLoggedIn: false, errorMessage: '' }

export const signUpSlice = createSlice({
  name: 'sign-up',
  initialState,
  reducers: {
    signUp: async (state, action) => {
      console.log(action.payload);
      await axios
        .post('http://localhost:4000/signup', {
          "username": `${action.payload.username}`,
          "email": `${action.payload.email}`,
          "password": `${action.payload.password}`,
          "phone": action.payload.phone,
          "college": `${action.payload.college}`,
          "ID": action.payload.ID,
          "memNo": action.payload.memNo
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error)=>{
          console.log(error.response.data.errorMessage);
        })

    }
  },
})

// Action creators are generated for each case reducer function
export const { signUp } = signUpSlice.actions

export default signUpSlice.reducer