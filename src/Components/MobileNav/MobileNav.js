import React from "react";
import { ReactComponent as Hamburger } from "../../assets/hamburger.svg";
import "./MobileNav.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
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
          <Link className="list-link" to={"/about"}>
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
      </div>
    </>
  );
}
