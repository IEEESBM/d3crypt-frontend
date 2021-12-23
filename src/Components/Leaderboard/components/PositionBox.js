function PositionBox(props) {
  return (
    <>
      <div className="position-table">
        <p className="Position" style={{ background: props.bg }}>
          {props.pos}
        </p>
        <span className="position-pic"></span>
        <p className="position-name">Alpha Beta</p>
        <p className="position-points" style={{ color: "#FFB800" }}>
          50
        </p>
        <p className="position-sort">...</p>
      </div>
    </>
  );
}

export default PositionBox;
