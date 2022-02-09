import "./Competition.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import MobileNavbar2 from "../MobileNav2/MobileNav2";
import Sidebar from "../UserProfile/Sidebar";
import { RiLightbulbFlashLine } from "react-icons/ri";
import Popup0 from "./Popup0";
import Popup1 from "./Popup1";
import Popup2 from "./Popup2";

function App() {
  const [popup0, setPopup0] = useState(false);
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [first, setFirst] = useState(0);

  const onClick = () => {
    if (first == 0) {
      setPopup0(true);
    } else if (first == 1) {
      setPopup1(true);
    } else {
      setPopup2(true);
    }
  };

  const [qtitle, setQTitle] = useState("Dummy data");
  const [diff, setDiff] = useState(0);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [dis, setDis] = useState(false);
  const [ind, setInd] = useState();
  const [points, setPoints] = useState(0);
  const [score, setScore] = useState(0);
  const [ans, setAns] = useState("");
  const handleAnsChange = (e) => {
    setAns(e.target.value);
  };

  const [index, setIndex] = useState(1);
  const [userID, setUserID] = useState("");

  useEffect(async () => {

    const jwt = JSON.parse(localStorage.getItem("jwt"));
    await axios.get("https://d3crypt-backend.herokuapp.com/check-verified", {
      headers: {
        'x-access-token': jwt
      }
    })
      .then((res) => {
        console.log(res);
        if (res.data === 'allow_access') {
          console.log(res.data);
        }
        else {
          window.location.href = '/';
        }
        // props.history.push("/")
      })
      .catch((err) => {
        console.log(err.message);
        window.location.href = '/';
      })
  })

  useEffect(async () => {
    const jwt = JSON.parse(localStorage.getItem("jwt"));

    await axios.get("https://d3crypt-backend.herokuapp.com/questions", {
      headers: {
        'x-access-token': jwt
      }
    })
      .then((res) => {
        console.log(res)
        setQTitle(res.data.question.title);
        setDiff(res.data.question.difficulty);
        setScore(res.data.user.points);
        setPoints(res.data.question.points);
        setInd(res.data.user.currentQuestion + 1);
        setImg1(res.data.question.image_1);
        setImg2(res.data.question.image_2);
        setImg3(res.data.question.image_3);
        setImg4(res.data.question.image_4);
        document.querySelector('.div1').style.backgroundColor = 'transparent';
        document.querySelector('.div2').style.backgroundColor = 'transparent';
        document.querySelector('.div3').style.backgroundColor = 'transparent';

        if (diff === 1) {
          document.querySelector('.div1').style.backgroundColor = '#ffb800';
          document.querySelector('.difficulty').innerHTML = "Easy";
        }
        if (diff === 2) {
          document.querySelector('.div2').style.backgroundColor = '#ffb800';
          document.querySelector('.difficulty').innerHTML = "Medium";
        }
        if (diff === 3) {
          document.querySelector('.div3').style.backgroundColor = '#ffb800';
          document.querySelector('.difficulty').innerHTML = "Hard";
        }
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // setDis(true);
    console.log(userID);
    console.log("submitting");
    var token = localStorage.getItem("jwt");

    axios
      .post("https://d3crypt-backend.herokuapp.com/submit", {
        answer: ans,
        token: token
      })
      .then((res) => {
        document.querySelector('.answer-error').innerHTML = '&nbsp;'
        console.log(res.data);
        setDis(false);
        setFirst(0);

        document.querySelector('.answer').value = ''
        if (res.data.isCorrect === true) {
          setIndex(index + 1)
          setFirst(0);
          // setPopup0(false);
          // setPopup1(false);
          // setPopup2(false);
          if (ind === 15) {
            window.location.href = '/leaderboard'
          }

        };
        if (res.data.isCorrect === false) {
          document.querySelector('.answer-error').innerHTML = "Wrong answer";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <MobileNavbar2></MobileNavbar2>
      <div className="App competitions-container">
        <Sidebar></Sidebar>
        {popup0 ? (
          <Popup0 remove0={setPopup0} add1={setPopup1} first={setFirst} />
        ) : null}
        {popup1 ? (
          <Popup1 remove1={setPopup1} add2={setPopup2} first={setFirst} userID={userID} />
        ) : null}
        {popup2 ? <Popup2 remove2={setPopup2} userID={userID} /> : null}
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
                    Question <span>{ind}</span> of 15
                  </div>

                  <div className="question-title">{qtitle}</div>

                  <div className="boxes-outer">
                    <div className="boxes">
                      <div class="grid-item">
                        <img src={img1} alt="neural" />
                      </div>
                      <div class="grid-item">
                        <img src={img2} alt="neural" />
                      </div>
                      <div class="grid-item">
                        <img src={img3} alt="neural" />
                      </div>
                      <div class="grid-item">
                        <img src={img4} alt="neural" />
                      </div>
                    </div>
                  </div>
                  <div className="submit-outer">
                    <textarea
                      className="answer"
                      placeholder="Enter you answer here"
                      name="ans"
                      onChange={handleAnsChange}
                    ></textarea>
                    <button
                      className="btn btn-primary submit"
                      onClick={handleSubmit}
                      disabled={dis}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="answer-error">&nbsp;</div>
                </div>
              </div>
              <div className="competition-score">
                <div className="score-upper">
                  <div className="timer1">{points}</div>
                </div>

                <div className="score-middle">
                  <div className="timer2">
                    {score}
                    <div className="score">Score</div>
                  </div>
                </div>

                <div className="score-lower">
                  <div className="out">
                    <span className="difficulty">&nbsp;</span>
                    <div className="level-outer">
                      <div className="div1"></div>
                      <div className="line"></div>
                      <div className="div2"></div>
                      <div className="line"></div>
                      <div className="div3"></div>
                    </div>
                  </div>

                  <button className='first' onClick={onClick}>
                    <RiLightbulbFlashLine className='first-logo' />
                    <p className='first-text'>Need a hint?</p>
                    <div className='first-overlay'></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


