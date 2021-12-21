import PositionBox from "./components/PositionBox";
import "./PositionTable.css";

function PositionTable() {
  return (
    <>
      <div className="position-container">
        {/* ----------- Table Heading ------------- */}
        <div className="position-box">
          <div className="position-header">
            <p className="PositionH">Position</p>
            <p className="PositionN">Name</p>
            <p className="PositionP">Points</p>
            <p className="PositionS">
              Sort <i class="fas fa-sort"></i>
            </p>
          </div>
        </div>

        {/* ----------------- Table ---------------------- */}
        <div className="col-8 position-box">
          <PositionBox bg="#FFDF00" pos="1st"></PositionBox>
        </div>
        <div className="col-8 position-box">
          <PositionBox bg="#D3D3D3" pos="2nd"></PositionBox>
        </div>
        <div className="col-8 position-box">
          <PositionBox bg="#EB8D00" pos="3rd"></PositionBox>
        </div>
        <div className="col-8 position-box">
          <PositionBox bg="#455A64" pos="4th"></PositionBox>
        </div>
        <div className="col-8 position-box">
          <PositionBox bg="#455A64" pos="5th"></PositionBox>
        </div>
        <div className="col-8 position-box">
          <PositionBox bg="#455A64" pos="6th"></PositionBox>
        </div>
        <div className="col-8 position-box">
          <PositionBox bg="#455A64" pos="7th"></PositionBox>
        </div>
      </div>
    </>
  );
}

export default PositionTable;
