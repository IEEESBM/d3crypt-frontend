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
  const handleAnsChange = (e)=>{
    setAns(e.target.value);
  }

  const [index, setIndex] = useState(1);

  var userID = ''

  useEffect(() => {
    var token = localStorage.getItem("jwt");
    if (token) {
      var base64Payload = token.split(".")[1];
      var payload = Buffer.from(base64Payload, "base64");
      userID = JSON.parse(payload.toString()).id;
      // console.log(userID);
    }

    axios.post("http://localhost:4000/questions", {
      id: userID
    }).then((res) => {
      setQTitle(res.data.title);
      setDiff(res.data.difficulty);
      setPoints(res.data.points);
      // setInd(res.data.index);
      setImg1(res.data.image_1);
      setImg2(res.data.image_2);
      setImg3(res.data.image_3);
      setImg4(res.data.image_4);
    });
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
    axios.post("http://localhost:4000/submit", {
      'answer': ans,
      'userId': userID
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    setIndex(index + 1);
  };

  return (
    <div className="App">
      <div className="competition-sidebar"></div>

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
                  Question <span>{index}</span> of 8
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
                <textarea className="answer" placeholder="Enter you answer here" name="ans" onChange={handleAnsChange}></textarea>
                <button
                  className="btn btn-primary submit"
                  onClick={handleSubmit}
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

  );
}

export default Competition;

