function PositionBox(props) {
  return (
    <>
      <div className="position-table">
        <div className="position-h">
          <p className="Position" style={{ background: props.bg }}>
            {props.pos}
          </p>
        </div>

        <div className="position-n">
          <span className="position-pic"></span>
          <p className="position-name">{props.name}</p>
        </div>

        <p className="position-p">{props.points}</p>
      </div>
    </>
  );
}

export default PositionBox;
