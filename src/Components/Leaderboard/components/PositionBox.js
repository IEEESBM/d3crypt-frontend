function PositionBox(props) {
  if (props.src) {
    var imgSrc = "http://localhost:4000/image/" + props.src;
  }
  else {
    var imgSrc = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
  }
  return (
    <>
      <div className="position-table">
        <div className="position-h">
          <p className="Position" style={{ background: props.bg }}>
            {props.pos}
          </p>
        </div>

        <div className="position-n">
          <img className="position-pic" src={imgSrc}
          >
          </img>
          <p className="position-name">{props.name}</p>
        </div>

        <p className="position-p">{props.points}</p>
      </div>
    </>
  );
}

export default PositionBox;
