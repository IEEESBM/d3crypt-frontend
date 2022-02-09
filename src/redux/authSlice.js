import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ConsoleHelper from "../Components/consolelogger";


const jwt = JSON.parse(localStorage.getItem("jwt"));
// var allow = false;

// export const check_verified = async () => {
//   await axios.get("https://d3crypt-backend.herokuapp.com/check-verified", {
//     headers: {
//       'x-access-token': jwt
//     }
//   })
//     .then((res) => {
//       ConsoleHelper(res);
//       if (res.data === 'allow_access') {
//         ConsoleHelper(res.data);
//         allow = true;
//       }
//       else {
//         allow = false;
//       }
//       // props.history.push("/")
//     })
//     .catch((err) => {
//       ConsoleHelper(err.message);
//       allow = false;
//     })
// }
// check_verified();

// ConsoleHelper(allow);


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
      ConsoleHelper(action.payload);
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
      ConsoleHelper(action.payload);
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
