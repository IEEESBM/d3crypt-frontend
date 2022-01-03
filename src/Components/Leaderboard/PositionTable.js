import PositionBox from "./components/PositionBox";
import "./PositionTable.css";

function PositionTable() {
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
          bg="#FFDF00"
          pos="1st"
          name="Alpha Beta"
          points="50"
        ></PositionBox>
      </div>
      <div className="position-box">
        <PositionBox
          bg="#D3D3D3"
          pos="2nd"
          name="Alpha Beta"
          points="50"
        ></PositionBox>
      </div>
      <div className="position-box">
        <PositionBox
          bg="#EB8D00"
          pos="3rd"
          name="Alpha Beta"
          points="50"
        ></PositionBox>
      </div>
      <div className="position-box">
        <PositionBox
          bg="#455A64"
          pos="4th"
          name="Alpha Beta"
          points="50"
        ></PositionBox>
      </div>
      <div className="position-box">
        <PositionBox
          bg="#455A64"
          pos="5th"
          name="Alpha Beta"
          points="50"
        ></PositionBox>
      </div>
      <div className="position-box">
        <PositionBox
          bg="#455A64"
          pos="6th"
          name="Alpha Beta"
          points="50"
        ></PositionBox>
      </div>
      <div className="position-box">
        <PositionBox
          bg="#455A64"
          pos="7th"
          name="Alpha Beta"
          points="50"
        ></PositionBox>
      </div>
    </div>
  );
}

export default PositionTable;
