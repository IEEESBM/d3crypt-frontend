import React, { useState, useEffect } from "react";
import "./MobileNav2.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { verified } from "../../redux/authSlice";
import Sidebar from "../UserProfile/Sidebar";

export default function MobileNavbar2() {
  const { isLoggedIn } = useSelector((state) => state.signUp);

  const dispatch = useDispatch();

  useEffect(() => {
    var token = localStorage.getItem("jwt");
    if (token) {
      var base64Payload = token.split(".")[1];
      var payload = Buffer.from(base64Payload, "base64");
      var userID = JSON.parse(payload.toString()).id;
      console.log(userID);
      axios
        .post("http://localhost:4000/get-user", {
          uid: `${userID}`,
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
        )
        .catch((error) => {
          console.log(error);
        });
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
