import "./Ranks.css";

function Ranks() {
  return (
    <div className="ranks-container">
      <div className="rank-box1 ranks-box d-flex flex-column align-items-center">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
          alt="ProfilePic"
          className="profileimage rank-box1-pic"
        />
        <p className="ranks-name rank-box1-name">Alpha Beta</p>
        <p className="ranks-position rank-box1-pos">
          1<span className="ranks-suffix">st</span>
        </p>
      </div>

      <div className="rank-box2 ranks-box d-flex flex-column align-items-center">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
          alt="ProfilePic"
          className="profileimage rank-box2-pic"
        />
        <p className="ranks-name rank-box2-name">Alpha Beta</p>
        <p className="ranks-position rank-box2-pos">
          2<span className="ranks-suffix">nd</span>
        </p>
      </div>

      <div className="rank-box3 ranks-box d-flex flex-column align-items-center">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
          alt="ProfilePic"
          className="profileimage rank-box3-pic"
        />
        <p className="ranks-name rank-box3-name">Alpha Beta</p>
        <p className="ranks-position rank-box3-pos">
          3<span className="ranks-suffix">rd</span>
        </p>
      </div>
    </div>
  );
}

export default Ranks;
