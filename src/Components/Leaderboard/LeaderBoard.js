import React, { useEffect, useState } from "react";
import Sidebar from "../UserProfile/Sidebar";
import Ranks from "./Ranks";
import PositionTable from "./PositionTable";
import "./LeaderBoard.css";
import axios from "axios";

function LeaderBoard() {
  const [order, setOrder] = useState([]);
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  useEffect(() => {
    // console.log("inhere");
    axios.get("http://localhost:4000/leaderboad").then(async (res) => {
      await setOrder(res.data.slice(3,));
      setFirst(res.data[0]);
      setSecond(res.data[1]);
      setThird(res.data[2]);
    });
  }, []);
  
// Right now there are a total of  13 users in the db, so i get all the users in descending order of points 
//(have hard coded points values for users in db). Specially setting the first second and third positions to.
//the correct user objects. And the array order contains all the user objects from 4th position to to the last,
//So you can just map through that then.
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
          <PositionTable></PositionTable>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
