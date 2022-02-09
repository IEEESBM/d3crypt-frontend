import React, { useState, useEffect } from "react";
import "./MobileNav2.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { verified } from "../../redux/authSlice";
import Sidebar from "../UserProfile/Sidebar";
import ConsoleHelper from "../consolelogger";


export default function MobileNavbar2() {
  const { isLoggedIn } = useSelector((state) => state.signUp);

  const dispatch = useDispatch();

  useEffect(() => {
    let windowHeight = document.documentElement.scrollHeight-61;
    ConsoleHelper(windowHeight);
    document.querySelector('.sidebar2 .sidebar').style.height = `${windowHeight}px`;

    // var token = localStorage.getItem("jwt");
    // if (token) {
    //   var base64Payload = token.split(".")[1];
    //   var payload = Buffer.from(base64Payload, "base64");
    //   var userID = JSON.parse(payload.toString()).id;
    //   ConsoleHelper(userID);
    //   axios
    //     .post("https://d3crypt-backend.herokuapp.com/get-user", {
    //       uid: `${userID}`,
    //     })
    //     .then(
    //       (response) => {
    //         ConsoleHelper(response);
    //         ConsoleHelper(response.data.isVerified);
    //         if (response.data.isVerified == true) {
    //           ConsoleHelper("dispatch for verified called");
    //           dispatch(verified());
    //         }
    //       },
    //       (error) => {
    //         ConsoleHelper(error);
    //       }
    //     )
    //     .catch((error) => {
    //       ConsoleHelper(error);
    //     });
    // } else {
    //   ConsoleHelper("User not found");
    // }
  }, []);

  function handleLogout() {
    localStorage.removeItem("jwt");
    window.location.reload();
  }
  const [visible, setVisible] = useState(false);

  function displayNavbar() {
    document.querySelector(".slidenavbar").classList.toggle("slide");
  }

  function toggleClass() {
    var div = document.getElementById("nav-icon2");
    div.classList.toggle("open");
    // document.querySelector(".slidenavbar").classList.toggle("slide");
    document.querySelector(".sidebar2").classList.toggle("slidein");
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
        ) : (
          <div></div>
        )}
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

      <div className="sidebar2">
        <Sidebar></Sidebar>
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
          <a className="hover-item2" onClick={handleLogout}>
            Logout
          </a>
        </div>
      )}
    </>
  );
}
