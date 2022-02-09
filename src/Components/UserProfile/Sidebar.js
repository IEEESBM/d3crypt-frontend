import React from "react";
import { ReactComponent as Smallicon } from "./smallicon.svg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import {FaFootballBall, FaUserAlt} from 'react-icons/fa'
import { MdLeaderboard } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/">
        <Smallicon className="smallicon" />
      </a>
      <a href="/">
        <AiFillHome className="homeicon" />
      </a>
      <a href="/leaderboard">
        <MdLeaderboard className="leaderboardicon" />
      </a>
      <a href="/competition">
        <FaFootballBall className="competitionicon" />
      </a>
      <a href="/user-profile">
        <FaUserAlt className="userprofileicon" />
      </a>
    </div>
  );
}

export default Sidebar;
