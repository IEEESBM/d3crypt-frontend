import React from "react";
import "./Contact.css";
import insta from "../../assets/instagram.svg";
import mention from "../../assets/mention.svg";
import net from "../../assets/net.svg";
import logo from "../../assets/ieee_logo.svg";
import youtube from "../../assets/youtube.svg";

import ig_logo from "../../assets/Instagram_Icon.svg";
import twitter_logo from "../../assets/Twitter_Icon.svg";
import fb_logo from "../../assets/Facebook_Icon.svg";

import { SiLinkedin, SiInstagram } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import {SiMinutemailer} from "react-icons/si";
import { IconContext } from "react-icons";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-h" id="contact">
        Contact
      </div>
      <div className="contact-row">
        <div className="c-box">
          <a
            href="
        https://ieeemanipal.com/"
            target={"_blank"}
          >
            <img src={net} className="contact-img" />
            <div className="c-box-text">www.ieeesbm.com</div>
          </a>
        </div>
{/* 
        <div className="c-box">
          <a
            href="
       mailto:info@ieeesbm.com 
        "
            target={"_blank"}
          >
            <img src={mention} className="contact-img" />
            <div className="c-box-text">info@ieeesbm.com</div>
          </a>
        </div> */}
        <div className="c-box">
          <a href="https://www.instagram.com/ieeesbm/?hl=en" target={"_blank"}>
            <img src={insta} className="contact-img" />
            <div className="c-box-text">ieeesbm</div>
          </a>
        </div>
        <div className="c-box">
          <a
            href="https://www.youtube.com/channel/UCeK19_N4m-37SiiUxSx1jzg"
            target={"_blank"}
          >
            <img src={youtube} className="contact-img" />
            <div className="c-box-text">IEEE SBM</div>
          </a>
        </div>
      </div>

      <div className="footer-c">
        <img src={logo} className="logo-img" />
        <div className="footer-content">
        D3CRYPT, IEEESBM’s annual cryptic hunt is here! 
        </div>
        <div>
       
        <a
            href="https://www.linkedin.com/company/ieee-student-branch-manipal/"
            target={"_blank"}
          >
            <IconContext.Provider
              value={{ color: '#ffb800', size: '80px'}}
            >
            <SiLinkedin className="footer-icon" /> 
            </IconContext.Provider>
        </a>
          {/* <AiFillTwitterCircle className="footer-icon" /> */}
          {/* <img src={fb_logo} className="footer-icon" /> */}
          {/* <img src={twitter_logo} className="footer-icon" /> */}
          {/* <img src={ig_logo} className="footer-icon" /> */}
          <a
            href="
       mailto:info@ieeesbm.com 
        "
            target={"_blank"}
          >
             <IconContext.Provider
              value={{ color: '#ffb800', size: '80px'}}
            >
            <SiMinutemailer className="footer-icon" />
            </IconContext.Provider>
        </a>
        </div>
      </div>
    </div>
  );
}
