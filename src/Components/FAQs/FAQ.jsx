import React from "react";
import "./FAQ.css";
export default function FAQs() {
  return (
    <div className="rules-container">
      <div className="rules-h">FAQs</div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" id="accordion-item">
          <div class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              id="acc"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1) When is the event conducted?
            </button>
          </div>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            D3CRYPT is an online guessing game made to test your analytical aptitude. The event will be live from 13th-14th February 2022.
            </div>
          </div>
        </div>

        <div class="accordion-item" id="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              id="acc"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2) What is the criteria for participation in the event?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            The event is open to all Undergraduate branches and colleges 
            </div>
          </div>
        </div>

        <div class="accordion-item" id="accordion-item">
          <div class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              id="acc"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3) What are the questions based on? 
            </button>
          </div>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>The event has questions under 5 broad categories : 
              <ul>
                <li> Technology </li>
               <li> Music/Pop culture </li>
                <li> Sports </li>
                <li> Life in Manipal </li> 
                <li> IEEE </li>
              </ul>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item" id="accordion-item">
          <div class="accordion-header" id="headingFour">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              id="acc"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              4) Is there any prize money rewarded for the event?
            </button>
          </div>
          <div
            id="collapseFour"
            class="accordion-collapse collapse show"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Yes, the top three position holders will be awarded prize money.
            </div>
          </div>
        </div>
        <div class="accordion-item" id="accordion-item">
          <div class="accordion-header" id="headingFive">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              id="acc"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
            >
              5) How does the marking scheme for the event work?
            </button>
          </div>
          <div
            id="collapseFive"
            class="accordion-collapse collapse show"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <p>
            The points awarded per question differ according to the difficulty level of the question. The original points for Easy, Medium, and Hard are 100, 200, and 300. 
            <br /><br />
            Fancy a mathematical equation? We do too. Assume the marks awarded for one question as P. The scoring system assesses your answer and then goes on to follow the below mentioned logic :
            Successful in the first attempt = p. <br />
            Successful in the 2nd= 0.9*p. <br />
            Successful in the third= 0.8*p. <br />
            For all other successful attempts= 0.5*p. <br />
            Got 3 consecutive answers right? Score a 20 point bonus. <br />
            If you are stuck on a question and cannot figure out the answer using the clues given, you can also opt for hints. In total, you will be allowed to sneak a peek at 2 hints for a question. However, beware! Using hints deducts points from your total score. Opting for hints will cost you 30 points and 50 points on each consecutive hint. 
            </p>
            </div>
          </div>
        </div>
        <div class="accordion-item" id="accordion-item">
          <div class="accordion-header" id="headingSix">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              id="acc"
              data-bs-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseSix"
            >
              6) Do I have to finish attempting all the questions together?
            </button>
          </div>
          <div
            id="collapseSix"
            class="accordion-collapse collapse show"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              No, your progress in the event will be continuously recorded,
              which allows you to stop, take a break and resume attempting the
              questions from where you had left.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
