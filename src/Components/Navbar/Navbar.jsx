import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import logo from '../../assets/logo.svg';

export default function NavBar() {
  return (
    <div className="nav-container">
        <div className="nav-item">
          <Link to={"/"} id="nav-link">
            <img src={logo} className="logo-1"/>
            <span className="nav-crypt">
            Crypt

            </span>
          </Link>
        </div>
        <div className="nav-left">
      
        <div className="main-nav">
        <div className="nav-item">
          <Link to={"/about"} id="nav-link">
            About
          </Link>
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
          <Link to={"/contact"} id="nav-link">
            Contact
          </Link>
        </div>
        </div>
      </div>
      <Link to={"/register"}>
      <button className="register-btn">
        <span className="register">Register</span>
      </button>
      </Link>
      
      <Link to={"/login"}>
      <button className="login-btn">
        <span className="login">Login</span>
        <AiOutlineArrowRight className="right-arrow" />
      </button>

      </Link>
    </div>
  );
}
