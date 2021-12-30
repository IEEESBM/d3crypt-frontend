import React from "react";
import FAQs from "../../assets/FAQs.svg";
import ieee from "../../assets/ieee.svg";
import rules from "../../assets/rules.svg";



export default function H2() {
  return (
    <div class="hcontainer2"  id="about" >
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

      <span class="ellipse1"></span>
      <div class="faq-list1">
        <span class="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod?
        </span>
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore e u fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui.
      </div>
      <span class="ellipse2"></span>
      <div class="faq-list2">
        <span class="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod?
        </span>
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore e u fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui.
      </div>

      <span class="ellipse3"></span>
      <div class="faq-list3">
        <span class="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod?
        </span>
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore e u fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui.
      </div>

      <button class="faq-btn">
        <span class="faq-btn-text">Read More</span>
      </button>
      <img src={rules} className="rules-img" />
      <div class="rules-head">Rules</div>
      <span class="ellipse4"></span>
      <div class="rules-list1">
        <span class="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          <br />
        </span>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore e u
      </div>
      <span class="ellipse5"></span>
      <div class="rules-list2">
        <span class="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          <br />
        </span>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore e u
      </div>

      <span class="ellipse6"></span>
      <div class="rules-list3">
        <span class="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          <br />
        </span>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore e u
      </div>
      <span class="ellipse7"></span>
      <div class="rules-list4">
        <span class="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          <br />
        </span>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore e u
      </div>
      <span class="ellipse8"></span>
      <div class="rules-list5">
        <span class="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          <br />
        </span>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore e u
      </div>

      <button class="rules-btn">
        <span class="rules-btn-text">Read More</span>
      </button>
    </div>
  );
}
