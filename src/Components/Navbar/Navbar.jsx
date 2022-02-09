import { React, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { verified } from "../../redux/authSlice";
import ConsoleHelper from "../consolelogger";

export default function NavBar() {
  const { isLoggedIn } = useSelector((state) => state.signUp);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   var token = localStorage.getItem("jwt");

  //   // var user = await User.findOne({ _id: userID });
  //   if (token) {
  //     var base64Payload = token.split(".")[1];
  //     var payload = Buffer.from(base64Payload, "base64");
  //     var userID = JSON.parse(payload.toString()).id;
  //     ConsoleHelper(userID);
  //     //user = JSON.parse(user);
  //     //ConsoleHelper(user);
  //     axios
  //       .post("https://d3crypt-backend.herokuapp.com/get-user", {
  //         uid: `${userID}`,
  //       })
  //       .then(
  //         (response) => {
  //           ConsoleHelper(response);
  //           ConsoleHelper(response.data.isVerified);
  //           if (response.data.isVerified == true) {
  //             ConsoleHelper("dispatch for verified called");
  //             dispatch(verified());


  //           }
  //         },
  //         (error) => {
  //           ConsoleHelper(error);
  //         }
  //       )
  //       .catch((error) => {
  //         ConsoleHelper(error);
  //       });
  //   } else {
  //     ConsoleHelper("User not found");
  //   }
  // }, []);

  function handleLogout() {
    localStorage.removeItem("jwt");
    window.location.reload();
  }
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="nav-container">
        <div className="nav-item">
          <Link to={"/"} id="nav-link">
            <img src={logo} className="logo-1" />
            <span className="nav-crypt-2">Crypt</span>
          </Link>
        </div>
        <div className="nav-left">
          <div className="main-nav">
            <div className="nav-item">
              <a href="/#about" id="nav-link">
                About
              </a>
            </div>{" "}
            <div className="nav-item">
              <Link to={"/faq"} id="nav-link">
                FAQ
              </Link>
            </div>{" "}
            <div className="nav-item">
              <Link to={"/rules"} id="nav-link">
                Rules
              </Link>
            </div>{" "}
            <div className="nav-item">
              <a id="nav-link" href="/#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
        {isLoggedIn ? (
          <>
          <div className="isLoggedin">

            <Link to={"/competition"}>
              <button className="comp-btn">
                <span className="comp">Head over to the competition</span>
                <div className="overlay"></div>
              </button>
            </Link>

            <img
              onMouseOver={() => {
                setVisible(true);
              }}
              className="nav-profile"
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
            />
          </div>

            {/* <button className="login-btn" onClick={handleLogout}>
            <span className="login">Logout</span>
            <AiOutlineArrowRight className="right-arrow" />
          </button> */}
          </>
        ) : (
          <>
            <Link to={"/register"}>
              <button className="register-btn">
                <div className="register-overlay"></div>
                <span className="register">Register</span>
              </button>
            </Link>

            <Link to={"/signin"}>
              <button className="login-btn">
                <span className="login">Sign in</span>
                <div className="login-overlay"></div>
                <AiOutlineArrowRight className="right-arrow" />
              </button>
            </Link>
          </>
        )}
      </div>
      {visible && (
        <div
          className="hover-div"
          onMouseOver={() => {
            setVisible(true);
          }}
          onMouseLeave={() => {
            setVisible(false);
          }}
        >
          <a className="hover-item" href={"/user-profile"}>
            Profile
          </a>
          <a className="hover-item" onClick={handleLogout}>
            Logout
          </a>
        </div>
      )}
    </>
  );
}
