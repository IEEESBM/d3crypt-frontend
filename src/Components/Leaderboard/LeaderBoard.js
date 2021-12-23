import React from "react";
import Ranks from "./Ranks";
import Sidebar from "./components/Sidebar";
import PositionTable from "./PositionTable";
import "./LeaderBoard.css";

function LeaderBoard() {
  return (
    <div className="L-container">
      <Sidebar />
      <div className="leaderboard-container">
        <h1 className="header">
          <p className="heading">Leaderboard</p>
          <p className="heading-line">
            <hr />
          </p>
        </h1>

        {/* -------------- Ranks box ----------------- */}
        <Ranks></Ranks>
        {/* --------------- Table ------------------- */}
        <PositionTable></PositionTable>
      </div>
    </div>
  );
}

export default LeaderBoard;
