import { React, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { verified } from "../../redux/authSlice";

export default function NavBar() {
  const { isLoggedIn } = useSelector((state) => state.signUp);

  const dispatch = useDispatch();

  useEffect(() => {
    var user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      console.log(user);
      axios
        .post("http://localhost:4000/get-user", {
          uid: `${user._id}`,
        })
        .then(
          (response) => {
            console.log(response);
            console.log(response.data.isVerified);
            if (response.data.isVerified == true) {
              console.log("dispatch for verified called");
              dispatch(verified());
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log("User not found");
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
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
              <a id="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
        {isLoggedIn ? (
          <>
            <Link to={"/competition"}>
              <button className="comp-btn">
                <span className="comp">Head over to the competition</span>
              </button>
            </Link>

            <img
              onMouseOver={() => {
                setVisible(true);
              }}
              className="nav-profile"
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
            />

            {/* <button className="login-btn" onClick={handleLogout}>
            <span className="login">Logout</span>
            <AiOutlineArrowRight className="right-arrow" />
          </button> */}
          </>
        ) : (
          <>
            <Link to={"/register"}>
              <button className="register-btn">
                <span className="register">Register</span>
              </button>
            </Link>

            <Link to={"/signin"}>
              <button className="login-btn">
                <span className="login">Sign in</span>
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
          <a className="hover-item" href={'/user-profile'}>Profile</a>
          <a className="hover-item" onClick={handleLogout}>Logout</a>
        </div>
      )}
    </>
  );
}
