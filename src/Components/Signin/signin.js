import React, { useState } from "react";
import { ReactComponent as Ques } from "../../assets/question.svg";
import { ReactComponent as Logos } from "../../assets/logo.svg";
import "./signin.css";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/authSignIn";
import NavBar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dis, setDis] = useState(false);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    setDis(true);
    const data = { email, password };
    console.log(data);
    dispatch(signInUser(data)).then(
      () => {
        setDis(false);
      },
      (error) => {
        console.log(error);
        if (error.email) {
          console.log(error.email);
          document.querySelector(".emailError").innerHTML = error.email;
          document.querySelector(".emailError2").innerHTML = error.email;
          document.querySelector(".passwordError").innerHTML = "";
          document.querySelector(".passwordError2").innerHTML = "";
          document.querySelector('.verifyError').innerHTML="";
          document.querySelector('.verifyError2').innerHTML="";

        }
        if (error.password) {
          console.log(error.password);
          document.querySelector(".emailError").innerHTML = "";
          document.querySelector(".emailError2").innerHTML = "";
          document.querySelector(".passwordError").innerHTML = error.password;
          document.querySelector(".passwordError2").innerHTML = error.password;
          document.querySelector('.verifyError').innerHTML="";
          document.querySelector('.verifyError2').innerHTML="";

        }
        if(error.verify){

          document.querySelector(".emailError").innerHTML = "";
          document.querySelector(".emailError2").innerHTML = "";
          document.querySelector(".passwordError").innerHTML = "";
          document.querySelector(".passwordError2").innerHTML = "";
          document.querySelector('.verifyError').innerHTML=error.verify;
          document.querySelector('.verifyError2').innerHTML=error.verify;

        }
      }
    );
  }

  return (
    <>
      <NavBar />
      <div className="signin col-lg-8 col-md-6 mx-auto mt-5 d-none d-sm-flex ">
        <div className="form py-3 col-lg-7 col-md-4 col-12">
          <Logos className=" col-3 logo mx-5 my-4 mb-4" />
          <form>
            <div class="container text-left col-12 ms-5">
              <p className="text-light text-left signin-text">Sign in</p>
              <div className="verifyError error">&nbsp;</div>

              <input
                type="email"
                className="email"
                placeholder="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="emailError error">&nbsp;</div>


              <hr></hr>
              <p className="my-4"></p>
              <input
                type="password"
                className="pwd"
                placeholder="Password"
                name="psw"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="passwordError error">&nbsp;</div>

              <p className="text-light text-end mt-2 col-8 fs-5">
                <Link
                  to={"/forgot"}
                  style={({ color: "white" }, { textDecoration: "none" })}
                >
                  Forgot Password?
                </Link>
              </p>
              <a class="sign_in">
                <button
                  type="submit"
                  class="btn-login col-8 btn-block text-center p-2 m-2"
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign in
                  <div className="overlay"></div>
                </button>
              </a>
            </div>
            <div className="d-flex flex-row para">
              <p className="text-light mt-3 ">Don’t have an account yet?</p>

              <a className="signup-text mt-3" href="/register">
                {" "}
                Sign Up!
              </a>
            </div>
          </form>
        </div>
        <div className="col-lg-5 col-md-4 img-fluid my-auto p-3 col-12">
          <Ques className="col-10 my-3 mx-5 img" />
          <p className="text-light text-center">
            Small info tidbit about D3Crypt. dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>

      <div className="col-10 d-flex flex-column d-sm-none justify-content-around mx-auto mobile my-auto mt-5 ">
        <div className="col-10 mx-auto img-fluid">
          <Ques className="col-12 m-3 img" />
        </div>
        <div className="form-mobile p-3 col-lg-6 d-inline-block">
          <form>
            <div class="container text-left col-12 ">
              <p className="text-light text-center fs-3">Sign in</p>
              <div className="verifyError2 error">&nbsp;</div>

              <input
                type="email"
                className="fs-5"
                placeholder="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="emailError2 error">&nbsp;</div>

              <p className="my-4"></p>
              <input
                type="password"
                className="fs-5"
                placeholder="Password"
                name="psw"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="passwordError2 error">&nbsp;</div>

              <p className="text-light text-end mt-2 me-4 fs-6 forgot">
                Forgot Password ?
              </p>
              <button
                type="submit"
                class="btn-login col-10 btn-block p-2 m-2 fs-3 text-center"
                onClick={(e) => handleSubmit(e)}
                disabled={dis}
              >
                Sign in
              </button>
              <div className="d-flex flex-row ">
                <p className="text-light mt-3 fs-6 text-center">
                  Don’t have an account yet?Sign Up!
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
