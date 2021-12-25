import axios from "axios";
import { signIn, showErrorMessages } from "../SignInSlice";

export const signInUser = function (user) {
  return function (dispatch) {
    return axios
      .post("http://localhost:4000/login", {
        email: `${user.email}`,
        password: `${user.password}`,
      })
      .then(
        (response) => {
          console.log(response);
          console.log(response.data.token);
          localStorage.setItem("user",JSON.stringify(response.data));
          document.querySelector('.emailError').innerHTML = "";

          document.querySelector('.passwordError').innerHTML = "";
  window.location.href="/"
  
          dispatch(signIn(user));
          return Promise.resolve();
        },
        (error) => {
          dispatch(showErrorMessages(error.response.data.errorMessage));
          console.log(error.response.data);
          return Promise.reject(error.response.data);
        }
      );
  };
};
