import React, { useState } from "react";
import { ReactComponent as Ques } from "../../assets/question.svg";
import { ReactComponent as Logos } from "../../assets/logo.svg";
import "./ResetPassword.css";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/authSignIn";
import NavBar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const current_url = window.location.href;
  const param_array = current_url.split("/");
  const id = param_array[4];
  const token = param_array[5];

  const url = "https://d3crypt-backend.herokuapp.com";

  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [err, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  function handleSubmit() {
    const data = {
      id,
      token,
      newPass,
    };

    if(newPass!=confirmNewPass) {

      setMsg("Password Mismatch");

      return;
    }

    axios
      .patch(url + "/reset", data)
      .then(
        (res) =>
          (res.data.status = "success"
            ? (setError(false),
              setSuccess(true),
              setMsg("Password Updated Successfully"))
            : null)
      )
      .catch((err) => console.log(err.message));

    console.log(data);
  }
  return (
    <>
      <NavBar />
      <div className="signin col-lg-8 col-md-6 mx-auto mt-5 d-none d-sm-flex ">
        <div className="form py-3 col-lg-7 col-md-4 col-12">
          <Logos className=" col-3 logo mx-5 my-4 mb-4" />
          <form>
            <div class="container text-left col-12 ms-5">
              <p className="text-light text-left signin-text">Reset Password</p>
              <input
                className="form-item"
                onChange={(e) => setNewPass(e.target.value)}
                placeholder="New password"
                type="password"
              />
              <p className="my-4"></p>
              <input
                className="form-item"
                onChange={(e) => setConfirmNewPass(e.target.value)}
                placeholder="Re-Enter New password"
                type="password"
              />
              <div className="emailError error">
                {msg !== "" ? (
                  <div
                    className={
                      err ? "failure" : success ? "success" : "no-class"
                    }
                  >
                    {msg}
                  </div>
                ) : null}
              </div>

              <hr></hr>

              <a class="sign_in">
                <button
                  type="submit"
                  class="btn-login col-8 btn-block text-center p-2 m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Reset Password
                </button>
              </a>
            </div>
          </form>
        </div>
        <div className="col-lg-5 col-md-4 img-fluid my-auto p-3 col-12">
          <Ques className="col-10 my-3 mx-5" />
          <p className="text-light text-center">
            Small info tidbit about D3Crypt. dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>

      <div className="col-10 d-flex flex-column d-sm-none justify-content-around mx-auto mobile my-auto mt-5 ">
        <div className="col-10 mx-auto img-fluid">
          <Ques className="col-12 m-3" />
        </div>
        <div className="form-mobile p-3 col-lg-6 d-inline-block">
          <form>
            <div class="container text-left col-12 ">
              <p className="text-light text-center fs-3 m pos1">
                Forgot Password?
              </p>
              <input
                type="password"
                className="fs-5 m"
                placeholder="New Password"
                name="email"
                required
              />
              <input
                type="password"
                className="fs-5 m"
                placeholder="Re-enter new Password"
                name="psw"
                required
              />
              <Link to={"/signin"}>
                <button
                  type="submit"
                  class="btn-login col-10 btn-block p-2 m-2 fs-4 text-center m"
                >
                  Reset Password
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
