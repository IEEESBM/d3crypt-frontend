import React from "react";
import FAQs from "../../assets/FAQs.svg";
import ieee from "../../assets/ieee.svg";
import rules from "../../assets/rules.svg";
import "./Mobileh2.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Mobileh2() {
  return (
    <>
      <div class="hcontainer2_1">
        <img src={ieee} className="ieee-img" />
        <div class="about-head">About Us</div>
        <br /> <br />
        <div class="about-text"> 
        Welcome to D3CRYPT. An annual online cryptic hunt conducted by IEEE Student
        Branch Manipal for increasing interaction among the first-year
        students and the senior students, D3CRYPT also provides a platform for students 
        of the second year and above to test their prowess as the next Sherlock Holmes. The event has
        added perks, including cash prizes for the first three position holders.
        </div>

        <div class="faq-head">FAQs</div>
        <img src={FAQs} className="faq-img" />

        <span class="ellipse1"></span>
        <div class="faq-list1">
          <span class="bold">
          What is the D3CRYPT? When is it conducted?
          </span>
          <br />
          D3CRYPT is an online guessing game made to test your analytical aptitude. The event will be live from 13th-14th February 2022.
        </div>
        <span class="ellipse2"></span>
        <div class="faq-list2">
          <span class="bold">
          Who can participate?
          </span>
          <br />
          The event is open to all Undergraduate branches and colleges 
        </div>
        <span class="ellipse3"></span>
        <div class="faq-list3">
          <span class="bold">
          Wondering about the prizes? 
          </span>
          <br />
          The top three position holders will score cash awards
        </div>

        <a href="/faq">
          <button class="faq-btn">
            <span class="faq-btn-text">
              Read More <AiOutlineArrowRight className="arrow-right" />
            </span>
          </button>
        </a>
        <img src={rules} className="rules-img" />
        <div class="rules-head">Rules</div>
        <span class="ellipse4"></span>
        <div class="rules-list1">
          <span class="bold">
            Get, Set, D3CRYPT!
            <br />
          </span>
        </div>
        <span class="ellipse5"></span>
        <div class="rules-list2">
          <span class="bold">
            <br />
          </span>
         1. The contest tests your resolution to hunt down clues and ascertain the best solution. Channel your inner Sherlock Holmes and place your best guess by connecting the dots between the visual aids provided.

        </div>
        <br />  <br /> <br />


        <span class="ellipse6"></span>
        <div class="rules-list3">
          <span class="bold">
          </span>
          <br /> <br />
         2. Starting on 13th February, 12pm, your quest ends in 36 hours. You need to finish answering all the questions within the allotted time.            <br />

        </div>
        <span class="ellipse7"></span>
        <div class="rules-list4">
          <span class="bold">
            <br />
          </span>
          <br /> 
         3. In case of a scoring dispute, the admin’s decision is final and absolute.
        </div>
      
        <a href="/rules">
          <button class="rules-btn">
            <span class="rules-btn-text">
              Read More
              <AiOutlineArrowRight className="arrow-right" />
            </span>
          </button>
        </a>
      </div>
    </>
  );
}
