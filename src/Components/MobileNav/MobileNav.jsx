import React, { useState, useEffect } from "react";
import { ReactComponent as Hamburger } from "../../assets/hamburger.svg";
import "./MobileNav.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { verified } from "../../redux/authSlice";

export default function MobileNavbar() {
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

  function displayNavbar() {
    document.querySelector(".slidenavbar").classList.toggle("slide");
  }

  function toggleClass() {
    var div = document.getElementById("nav-icon2");
    div.classList.toggle("open");
    document.querySelector(".slidenavbar").classList.toggle("slide");
  }
  return (
    <>
      <nav className="mobilenavbar">
      {isLoggedIn ? (
           
            <img
              onMouseOver={() => {
                setVisible(true);
              }}
              className="nav-profile2"
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
            />

      ):(<div></div>)}
        {/* <vaHamburger className="hamburger" onClick={displayNavbar}></Hamburger> */}

        {/* <a href="#"><DecryptLogo className="decryptlogo"></DecryptLogo></a> */}
        <div id="nav-icon2" onClick={toggleClass}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="slidenavbar">
        {/* <Hamburger className="hamburger" onClick={displayNavbar}></Hamburger> */}
        <div className="mobile-c">
          <img src={logo} className="mobile-logo"></img>
          <span className="mobile-span">CRYPT</span>
        </div>

        <div className="list-item i-1">
          <Link className="list-link" to={"/#about"}>
            <p>About</p>
          </Link>
        </div>
        <div className="list-item">
          <Link className="list-link" to={"/faq"}>
            <p>FAQ</p>
          </Link>
        </div>
        <div className="list-item">
          <Link className="list-link" to={"/rules"}>
            <p>Rules</p>
          </Link>
        </div>

        <div className="list-item">
          <a id="nav-link" href="#contact">
            Contact
          </a>
        </div>
        {isLoggedIn ? (
          <div className="btn-c">
            <Link to={"/competition"}>
              <button className="reg-button">Competition</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="btn-c">
              <Link to={"/register"}>
                <button className="reg-button">Register</button>
              </Link>
            </div>
            <div className="btn-c">
              <Link to={"/signin"}>
                <button className="log-button">Sign in</button>
              </Link>
            </div>
          </>
        )}
      </div>
      {visible && (
        <div
          className="hover-div2"
          onMouseOver={() => {
            setVisible(true);
          }}
          onMouseLeave={() => {
            setVisible(false);
          }}
        >
          <a className="hover-item2" href={'/user-profile'}>Profile</a>
          <a className="hover-item2" onClick={handleLogout}>Logout</a>
        </div>
      )}

    </>
  );
}
