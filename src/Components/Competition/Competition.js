import "./Competition.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Competition() {
  const [qtitle, setQTitle] = useState("Dummy data");
  const [diff, setDiff] = useState("Medium");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
 
  const [points, setPoints] = useState(0);
  const [ans, setAns] = useState("");
  
  const [ind, setInd] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:4000/questions").then((res) => {
      setQTitle(res.title);
      setDiff(res.difficulty);
      setPoints(res.points);
      setInd(res.index);
      setImg1(res.image_1);
      setImg2(res.image_2);
      setImg3(res.image_3);
      setImg4(res.image_4);
    });
  }, []);

  const handleSubmit = (e) => {
    axios.post("http://localhost:4000/submit", { id, ans }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <div className="sidebar"></div>

      <div className="competition-main-outer">
        <div className="temp">
          <div className="competition-title">
            Competition
            <div className="competition-line"></div>
          </div>

          <div className="competition-content-outer">
            <div className="competition-question-outer">
              <div className="competition-question-content">
                <div className="question-counter">
                  Question <span>{ind}</span> of 8
                </div>

                <div className="question-title">
                  {qtitle}
                </div>

                <div className="boxes-outer">
                  <div className="boxes">
                  <div class="grid-item">
                  <img
                    src={img1}
                    border="0"
                    alt="neural"
                  />
                </div>
                <div class="grid-item">
                  <img
                    src={img2}
                    border="0"
                    alt="neural"
                  />
                </div>
                <div class="grid-item">
                  <img
                    src={img3}
                    border="0"
                    alt="neural"
                  />
                </div>
                <div class="grid-item">
                  <img
                    src={img4}
                    border="0"
                    alt="neural"
                  />
                </div>
              </div>;
                   
                  </div>
                </div>
                <div className="submit-outer">
                  <textarea className="answer"></textarea>
                  <button
                    className="btn btn-primary submit"
                    onSubmit={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="competition-score">
              <div className="score-upper">
                <div className="timer1">02</div>
              </div>

              <div className="score-middle">
                <div className="timer2">
                  {points}
                  <div className="score">Score</div>
                </div>
              </div>

              <div className="score-lower">
                <div className="">
                  <span>{diff}</span>
                  <div className="level-outer">
                    <div className="div1"></div>
                    <div className="line"></div>
                    <div className="div2"></div>
                    <div className="line"></div>
                    <div className="div3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Competition;

