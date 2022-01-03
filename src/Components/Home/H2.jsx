import React from "react";
import FAQs from "../../assets/FAQs.svg";
import ieee from "../../assets/ieee.svg";
import rules from "../../assets/rules.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Home.css";
export default function H2() {
  return (
    <div class="hcontainer2" id="about">
      <img src={ieee} className="ieee-img" />
      <div class="about-head">About Us</div>

      <div class="about-text">
        Welcome to IEEE’s quiz event blah blah blah Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation
      </div>

      <div class="faq-head">FAQs</div>
      <img src={FAQs} className="faq-img" />
      <ul className="faq-list">
        <li>
          <b>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod?
          </b>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore e u fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui.
          </p>
        </li>

        <li>
          <b>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod?
          </b>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore e u fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui.
          </p>
        </li>
        <li>
          <b>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod?
          </b>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore e u fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui.
          </p>
        </li>
      </ul>
      <a href="/faq">
        <button class="faq-btn">
          <span class="faq-btn-text">
            Read More <AiOutlineArrowRight className="arrow-right" />
          </span>
        </button>
      </a>
      <img src={rules} className="rules-img" />
      <div class="rules-head">Rules</div>
      <ul className="rules-list">
        <li>
          <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
        </li>

        <li>
          <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
        </li>

        <li>
          <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
        </li>

        <li>
          <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
        </li>

        <li>
          <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
        </li>
      </ul>
      <a href="/rules">
        <button class="rules-btn">
          <span class="rules-btn-text">
            Read More <AiOutlineArrowRight className="arrow-right" />{" "}
          </span>
        </button>
      </a>
    </div>
  );
}
