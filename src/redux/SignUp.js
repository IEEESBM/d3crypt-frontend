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
        .post('http://localhost:4000/api/auth/signup', {
          "name": `${action.payload.name}`,
          "email": `${action.payload.email}`,
          "password": `${action.payload.password}`,
          "college": `${action.payload.college}`,
          "phoneno": `${action.payload.phone}`
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error)=>{
          console.log(error.response.data);
        })

    }
  },
})

// Action creators are generated for each case reducer function
export const { signUp } = signUpSlice.actions

export default signUpSlice.reducer