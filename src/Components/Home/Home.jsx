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
      .get("https://d3crypt-backend.herokuapp.com/check-verified", {
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
          D3CRYPT, IEEESBM’s annual cryptic hunt is here! 
          It’s time to put that creative mind of yours at work and race against your competitors. Fuel your imagination to beat the clock before time runs out, break all the records and claim victory to get bragging rights over your peers.
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
