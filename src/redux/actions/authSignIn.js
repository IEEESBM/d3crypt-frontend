import axios from "axios";
import { signIn, showErrorMessagesSignIn } from "../SignUpSlice";

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
          localStorage.setItem("user",JSON.stringify(response.data));
          document.querySelector('.emailError').innerHTML = "";

          document.querySelector('.passwordError').innerHTML = "";
          // window.location.href="/"
  
          dispatch(signIn(user));
          return Promise.resolve();
        },
        (error) => {
          dispatch(showErrorMessagesSignIn(error.response.data));
          return Promise.reject(error.response.data);
        }
      );
  };
};
