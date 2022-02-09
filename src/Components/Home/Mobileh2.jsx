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

        <div class="about-text">
          D3CRYPT is an annual online cryptic hunt conducted by IEEE Student
          Branch Manipal for increasing interaction among the first-year
          students and the senior students, it also provides a source of
          entertainment for students of the second year and above. The event has
          added perks such as cash prizes for the first three position holders.
        </div>

        <div class="faq-head">FAQs</div>
        <img src={FAQs} className="faq-img" />

        <span class="ellipse1"></span>
        <div class="faq-list1">
          <span class="bold">1. When is the event conducted?</span>
          <br />
          The event is going to be conducted from 12th-13th February 2022.
        </div>
        <span class="ellipse2"></span>
        <div class="faq-list2">
          <span class="bold">2. Who can participate in the event?</span>
          <br />
          Anybody can participate in the event, participation has no restriction
          based on the batch you belong to.
        </div>

        <span class="ellipse3"></span>
        <div class="faq-list3">
          <span class="bold">
            3. Which category questions can be found in the event?
          </span>
          <br />
          The event has questions under 5 broad categories, these are:
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
            <br />
          </span>
        </div>
        <span class="ellipse5"></span>
        <div class="rules-list2">
          <span class="bold">
            Rule 1
            <br />
          </span>
          The event is a 1.5-day event, and you need to finish answering all the
          questions in the stipulated time.
        </div>

        <span class="ellipse6"></span>
        <div class="rules-list3">
          <span class="bold">
            Rule 2
            <br />
          </span>
          The decision for extension in the duration of the event will be taken
          by the board.
        </div>
        <span class="ellipse7"></span>
        <div class="rules-list4">
          <span class="bold">
            Rule 3:
            <br />
          </span>
          In case of a dispute, the board will take the final decision.
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
