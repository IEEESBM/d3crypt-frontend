import React, { useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
// import FlipDown from '../../../public/flipdown';
import disc from "../../assets/disc.svg";
import logo from "../../assets/logo.svg";

import "./Home.css";
export default function Home() {
  return (
    <div className="h-container">
      <div className="head">
        <img src={logo} className="logo2" />
        <span className="h-text">Crypt</span>
      </div>
      <img src={disc} className="disc-img" />
      <div className="head_text">
        Welcome to IEEE's quiz event blah blah blah Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation
      </div>
      <div className="coming_soon">Coming Soon!</div>
      <div className="flipdown-container">
        <div id="flipdown" class="flipdown"></div>
      </div>

      <button className="register-btn-2">
        <span className="register-2">Register Now!</span>
      </button>
      <a href="#contact">
        <div className="r-more">Read More</div>
        <AiOutlineArrowDown className="down-arrow" />
      </a>
      

    </div>
  );
}
