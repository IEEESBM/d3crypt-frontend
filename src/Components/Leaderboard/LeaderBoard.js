import React, { useEffect, useState } from "react";
import Sidebar from "../UserProfile/Sidebar";
import Ranks from "./Ranks";
import PositionTable from "./PositionTable";
import "./LeaderBoard.css";
import axios from "axios";
import MobileNavbar2 from "../MobileNav2/MobileNav2";

function LeaderBoard() {
  const [remainingList, setRemainingList] = useState([]);
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});

  useEffect(async () => {

    const jwt = JSON.parse(localStorage.getItem("jwt"));
    await axios.get("http://localhost:4000/check-verified", {
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
    <>
      <MobileNavbar2></MobileNavbar2>
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
            <Ranks remainingList={remainingList} first={first} second={second} third={third}></Ranks>
            <PositionTable remainingList={remainingList} first={first} second={second} third={third}></PositionTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderBoard;
