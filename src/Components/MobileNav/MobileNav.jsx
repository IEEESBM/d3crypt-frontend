import React, { useState, useEffect } from "react";
import "./MobileNav.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { verified } from "../../redux/authSlice";

export default function MobileNavbar() {
  var token = localStorage.getItem("jwt");

  const dispatch = useDispatch();

  function handleLogout() {
    console.log("in lgout");
    localStorage.removeItem("jwt");
    window.location.reload();
  }
  const [visible, setVisible] = useState(false);

  function toggleClass() {
    var div = document.getElementById("nav-icon2");
    div.classList.toggle("open");
    document.querySelector(".slidenavbar").classList.toggle("slide");
  }

  useEffect(async() => {
    console.log("in mob ue");
    var token = localStorage.getItem("jwt");
    if(token){

    
    await axios
      .get("http://localhost:4000/user", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        console.log(res);
      });
    }
  });
  return (
    <>
      <nav className="mobilenavbar">
        {token ? (
          <img
            onMouseOver={() => {
              setVisible(true);
            }}
            className="nav-profile2"
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
          />
        ) : (
          <div></div>
        )}

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
        {token ? (
          <div className="btn-c">
            <Link to={"/competition"}>
              <button className="reg-button">
                Competition<div className="overlay"></div>
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="btn-c">
              <Link to={"/register"}>
                <button className="reg-button">
                  Register<div className="overlay"></div>
                </button>
              </Link>
            </div>
            <div className="btn-c">
              <Link to={"/signin"}>
                <button className="log-button">
                  Sign in<div className="overlay"></div>
                </button>
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
          <a className="hover-item2" href={"/user-profile"}>
            Profile
          </a>
          <a
            className="hover-item2"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </a>
        </div>
      )}
    </>
  );
}
