import axios from "axios";
import { signUp, showErrorMessagesSignUp } from "../authSlice";

export const register = function (newUser) {
  return function (dispatch) {
    return axios
      .post("http://localhost:4000/signup", {
        username: `${newUser.username}`,
        email: `${newUser.email}`,
        password: `${newUser.password}`,
        phone: newUser.phone,
        college: `${newUser.college}`,
        ID: newUser.ID,
        mem: newUser.mem,
        memNo: newUser.memNo,
      })
      .then(
        (response) => {
          console.log(response);
          // localStorage.setItem("user",JSON.stringify(response.data.user));
          // localStorage.setItem("jwt",JSON.stringify(response.data.token));
          // localStorage.setItem("jwt", JSON.stringify(response.data));
          dispatch(signUp(newUser));
          return Promise.resolve();
        },
        (error) => {
          console.log(error);
          dispatch(showErrorMessagesSignUp(error.response.data.errorMessage));
          return Promise.reject(error.response.data.errorMessage);
        }
      );
  };
};
