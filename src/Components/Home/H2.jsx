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
        D3CRYPT is a yearly web-based cryptic hunt coordinated by IEEE Student
        Branch Manipal for extending association among the first year students
        and the senior students, it moreover gives a wellspring of redirection
        to students of the second year and above. The event enjoys added
        benefits including cash prizes for the underlying three position
        holders.
      </div>

      <div class="faq-head">FAQs</div>
      <img src={FAQs} className="faq-img" />
      <ul className="faq-list">
        <li>
          <b> 1. When is the event conducted?</b>
          <p>
            {" "}
            The event is going to be conducted from 13th-14th February 2022.
          </p>
        </li>

        <li>
          <b> 2. What is the criteria of participation for the event?</b>
          <p>
            {" "}
            Anybody can participate in the event, participation has no
            restriction based on the batch you belong to.
          </p>
        </li>
        <li>
          <b>
            {" "}
            3. Does questions belong to a specific category? Which categories
            can be found in the event?
          </b>
          <p>
            {" "}
            The event has questions under 5 broad categories, these are: a.
            Technology b. Music/Pop culture c. Sports d. Life in Manipal e. IEEE
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
          <b> Rule 1 </b>
          <p>
            {" "}
            The event is a 1.5-day event, and you need to finish answering all
            the questions in the stipulated time.
          </p>
        </li>

        <li>
          <b> Rule 2</b>
          <p>
            {" "}
            The decision for extension in the duration of the event will be
            taken by the board.
          </p>
        </li>

        <li>
          <b> Rule 3</b>
          <p> In case of a dispute, the board will take the final decision.</p>
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
