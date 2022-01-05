import React, { useEffect, useState } from "react";
import Sidebar from "../UserProfile/Sidebar";
import Ranks from "./Ranks";
import PositionTable from "./PositionTable";
import "./LeaderBoard.css";
import axios from "axios";

function LeaderBoard() {
  const [remainingList, setRemainingList] = useState([]);
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});
  useEffect(() => {
    // console.log("inhere");
    axios.get("http://localhost:4000/leaderboad")
      .then(async (res) => {
        await setRemainingList(res.data.slice(3));
        setFirst(res.data[0]);
        setSecond(res.data[1]);
        setThird(res.data[2]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="leaderboard-container">
      <div id="leaderboard-container">
        <Sidebar></Sidebar>
      </div>

      <div className="leaderboard-main">
        <h1 className="header">
          <p className="heading">Leaderboard</p>
          <p className="heading-line">
            <hr />
          </p>
        </h1>
        <div className="leaderboard-content">
          <Ranks></Ranks>
          <PositionTable remainingList={remainingList} first={first} second={second} third={third}></PositionTable>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
