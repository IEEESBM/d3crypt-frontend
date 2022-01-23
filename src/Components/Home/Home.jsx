import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
// import FlipDown from '../../../public/flipdown';
import disc from "../../assets/disc.svg";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import axios from "axios";

import "./Home.css";
export default function Home() {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(async () => {
    const jwt = JSON.parse(localStorage.getItem("jwt"));

    await axios
      .get("http://localhost:4000/check-verified", {
        headers: {
          "x-access-token": jwt,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data === "allow_access") {
          setLoggedin(true);
        } else {
          setLoggedin(false);
        }
        // props.history.push("/")
      })
      .catch((err) => {
        console.log(err.message);
        setLoggedin(false);
      });
  }, []);

  return (
    <>
      <div className="h-container">
        <div className="head">
          <img src={logo} className="logo2" />
          <div id="h-text">Crypt</div>
        </div>
        <img src={disc} className="disc-img" />
        <div class="muzieknootjes">
          {/* <div class="noot-1">
  &#9835; &#9833;
</div> */}
          <div class="noot-2">&#9833;</div>
          <div class="noot-3">&#9839; &#9834;</div>
          <div class="noot-4">&#9834;</div>
        </div>

        <div className="head_text">
          Welcome to IEEE's quiz event blah blah blah Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </div>
        <div className="coming_soon">Coming Soon!</div>
        <div className="flipdown-container">
          <div id="flipdown" class="flipdown"></div>
        </div>

        {!loggedin && (
          <a href="/register">
            <button className="register-btn-2">
              <span className="register-2">Register Now!</span>
              <div className="register-btn-2-overlay"></div>
            </button>
          </a>
        )}
        <a href="#about">
          <div className="r-container">
            <div className="r-more">Read More</div>
            <AiOutlineArrowDown className="down-arrow" />
          </div>
        </a>
      </div>
    </>
  );
}
