import React from "react";
import Sidebar from "./Sidebar";
import Ranks from "./Ranks";
import PositionTable from "./PositionTable";
import "./LeaderBoard.css";

function LeaderBoard() {
  return (
    <div className="leaderboard-container">
      <Sidebar></Sidebar>
      <div className="leaderboard-main">
        <h1 className="header">
          <p className="heading">Leaderboard</p>
          <p className="heading-line">
            <hr />
          </p>
        </h1>
        <div className="leaderboard-content">
          <Ranks></Ranks>
          <PositionTable></PositionTable>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
