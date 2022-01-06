import PositionBox from "./components/PositionBox";
import "./PositionTable.css";

function PositionTable({ remainingList, first, second, third }) {
  return (
    <div className="position-container">
      {/* ----------- Table Heading ------------- */}
      <div className="position-box">
        <div className="position-header">
          <p className="PositionH">Position</p>
          <p className="PositionN">Name</p>
          <p className="PositionP">Points</p>
        </div>
      </div>

      {/* ----------------- Table ---------------------- */}
      <div className="position-box">
        <PositionBox
          src={first.imgKey}
          bg="#FFDF00"
          pos="1"
          name={first.username}
          points={first.points}
        ></PositionBox>
      </div>
      <div className="position-box">
        <PositionBox
          
          bg="#D3D3D3"
          pos="2"
          name={second.username}
          points={second.points}
        ></PositionBox>
      </div>
      <div className="position-box">
        <PositionBox
          bg="#EB8D00"
          pos="3"
          name={third.username}
          points={third.points}
        ></PositionBox>
      </div>
      {
        remainingList.map((listItem, index) => {
          console.log(listItem);
          return (
            <div className="position-box">
              <PositionBox
                bg="#EB8D00"
                pos={`${index + 4}`}
                name={listItem.username}
                points={listItem.points}
              ></PositionBox>
            </div>
          )
        })
      }
    </div>
  );
}

export default PositionTable;
