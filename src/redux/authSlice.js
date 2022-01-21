import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jwt = JSON.parse(localStorage.getItem("jwt"));
// var allow = false;

// export const check_verified = async () => {
//   await axios.get("http://localhost:4000/check-verified", {
//     headers: {
//       'x-access-token': jwt
//     }
//   })
//     .then((res) => {
//       console.log(res);
//       if (res.data === 'allow_access') {
//         console.log(res.data);
//         allow = true;
//       }
//       else {
//         allow = false;
//       }
//       // props.history.push("/")
//     })
//     .catch((err) => {
//       console.log(err.message);
//       allow = false;
//     })
// }
// check_verified();

// console.log(allow);


var initialState = jwt ? {
  SignUpErrorMessage: {},
  SignInErrorMessage: {},
  isLoggedIn: true,
} : {
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
