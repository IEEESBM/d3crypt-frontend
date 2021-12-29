import axios from "axios"
import { signUp, showErrorMessagesSignUp } from "../SignUpSlice";


export const register = function (newUser) {
  return function (dispatch) {
    return axios.post('http://localhost:4000/signup', {
      "username": `${newUser.username}`,
      "email": `${newUser.email}`,
      "password": `${newUser.password}`,
      "phone": newUser.phone,
      "college": `${newUser.college}`,
      "ID": newUser.ID,
      "memNo": newUser.memNo
    })
      .then(
        (response) => {
          console.log(response);
          localStorage.setItem("user",JSON.stringify(response.data));
          dispatch(signUp(newUser));
          return Promise.resolve();
        },
        (error) => {
          dispatch(showErrorMessagesSignUp(error.response.data.errorMessage));
          return Promise.reject(error.response.data.errorMessage);
        }
      )
  }
}