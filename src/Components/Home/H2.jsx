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
<br /><br />
      <div class="about-text">
        Welcome to D3CRYPT. An annual online cryptic hunt conducted by IEEE Student
        Branch Manipal for increasing interaction among the first-year
        students and the senior students, D3CRYPT also provides a platform for students 
        of the second year and above to test their prowess as the next Sherlock Holmes. The event has
        added perks, including cash prizes for the first three position holders.
      </div>

      <div class="faq-head">FAQs</div>
      <img src={FAQs} className="faq-img" />
      <ul className="faq-list">
        <li>
          <b>
            {" "}
            What is the D3CRYPT? When is it conducted?
          </b>
          <p>
            {" "}
            D3CRYPT is an online guessing game made to test your analytical aptitude. The event will be live from 13th-14th February 2022.
          </p>
        </li>

        <li>
          <b>
            {" "}
            Who can participate?
          </b>
          <p>
            {" "}
            The event is open to all Undergraduate branches and colleges 
          </p>
        </li>
        <li>
          <b>
            {" "}
            Wondering about the prizes? 
          </b>
          <p>
            {" "}
            The top three position holders will score cash awards
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
           <b style= {{fontSize: "1.35em"}}> {" "} The contest tests your resolution to hunt down clues and ascertain the best solution. Channel your inner Sherlock Holmes and place your best guess by connecting the dots between the visual aids provided. </b>
          <p>
            {" "}
          </p>
        </li>

        <li>
          <b style= {{fontSize: "1.35em"}}> Starting on 13th February, 12pm, your quest ends in 36 hours. You need to finish answering all the questions within the allotted time. </b>
          <p>
            {" "}
          </p>
        </li>

        <li>
          <b style= {{fontSize: "1.35em"}}> In case of a scoring dispute, the admin’s decision is final and absolute.</b>
          <p>
            {" "}

          </p>
        </li>

        {/* <li>
          <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
        </li> */}
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
