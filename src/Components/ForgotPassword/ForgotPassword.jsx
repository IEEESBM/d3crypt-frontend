import React, { useState } from "react";
import { ReactComponent as Ques } from "../../assets/question.svg";
import { ReactComponent as Logos } from "../../assets/logo.svg";
import "./ForgotPassword.css";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/authSignIn";
import NavBar from "../Navbar/Navbar";

export default function ForgotPassword() {
  return (
    <>
      <NavBar />
      <div className="signin col-lg-8 col-md-6 mx-auto mt-5 d-none d-sm-flex ">
        <div className="form py-3 col-lg-7 col-md-4 col-12">
          <Logos className=" col-3 logo mx-5 my-4 mb-4" />
          <form>
            <div class="container text-left col-12 ms-5">
              <p className="text-light text-left signin-text">
                Forgot Password ?
              </p>
              <input
                type="email"
                className="email"
                placeholder="email"
                name="email"
                required
              />
              <div className="emailError error">&nbsp;</div>

              <hr></hr>

              <p className="text-light text-end mt-2 col-8 fs-5 pos2">
                <span className="pos2">Please enter registered email id</span>
              </p>
              <a class="sign_in">
                <button
                  type="submit"
                  class="btn-login col-8 btn-block text-center p-2 m-2"
                >
                  Request Password Reset
                  <div className="overlay"></div>
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
                type="email"
                className="fs-5"
                placeholder="email"
                name="email"
                required
              />
              <p className="text-light text-end  m pos1">
                Please enter registered email id
              </p>

              <button
                type="submit"
                class="btn-login col-10 btn-block p-2 m-2 fs-3 text-center m"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
