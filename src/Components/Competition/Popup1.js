import { React, useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import "./popup.css";
import axios from "axios";
import ConsoleHelper from "../consolelogger";

export default function Popup1({ remove1, add2, first, userID }) {
  const jwt = JSON.parse(localStorage.getItem("jwt"));

  const [hint1, setHint1] = useState("");

  useEffect(() => {
    ConsoleHelper(jwt);
    axios
      .put(
        "https://d3crypt-backend.herokuapp.com/hint",
        {},
        {
          headers: {
            "x-access-token": jwt,
          },
        }
      )
      .then((res) => {
        ConsoleHelper(res);
        setHint1(res.data.hint1);
      });
  }, []);

  const handleClick = () => {
    remove1(false);
    add2(true);
    first(2);
  };

  const handleClose = () => {
    remove1(false);
  };
  return (
    <div>
      <div className="hint-content">
        <div className="hint-title">
          <p className="hint-title-text">Hint 1</p>
          <AiOutlineClose className="hint-close" onClick={handleClose} />
        </div>
        <div className="hint-body">
          {/* <p className='hint-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
          <p className="hint-body-content">{hint1}</p>
          <p className="hint-body-title">Want another hint?</p>
          <p className="hint-body-content">
            The help you seek will cost you precious points.
            <br /> -50 for your second hint.{" "}
          </p>
          <button className="hint-button" onClick={handleClick}>
            <span className="hint-button-text">Proceed</span>
            <AiOutlineArrowRight className="hint-right-arrow" />
            <div className="hint-button-overlay"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
