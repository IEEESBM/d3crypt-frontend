import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, errorMessage: '' }
  : { isLoggedIn: false, errorMessage: '' }

export const signInSlice = createSlice({
  name: 'sign-in',
  initialState,
  reducers: {
    signIn: async (state, action) => {
      console.log(action.payload);
      await axios
        .post('http://localhost:4000/login', {
          "email": `${action.payload.email}`,
          "password": `${action.payload.password}`
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("user",JSON.stringify(response.data))
        })
        .catch((error)=>{
          console.log(error.response.data);
        })

    }
  },
})

// Action creators are generated for each case reducer function
export const { signIn } = signInSlice.actions

export default signInSlice.reducer