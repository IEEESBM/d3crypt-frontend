import "./Ranks.css";

function Ranks({ remainingList, first, second, third }) {
  if (first.imgKey) {
    var firstImgSrc = "https://d3crypt-backend.herokuapp.com/image/" + first.imgKey;
  }
  else {
    var firstImgSrc = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
  }
  if (second.imgKey) {
    var secondImgSrc = "https://d3crypt-backend.herokuapp.com/image/" + second.imgKey;
  }
  else {
    var secondImgSrc = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
  }
  if (third.imgKey) {
    var thirdImgSrc = "https://d3crypt-backend.herokuapp.com/image/" + third.imgKey;
  }
  else {
    var thirdImgSrc = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
  }

  return (
    <div className="ranks-container">
      <div className="rank-box1 ranks-box d-flex flex-column align-items-center">
        <img
          src={firstImgSrc}
          className="profileimage rank-box1-pic"
        />
        <p className="ranks-name rank-box1-name">{first.username}</p>
        <p className="ranks-position rank-box1-pos">
          1<span className="ranks-suffix">st</span>
        </p>
      </div>

      <div className="rank-box2 ranks-box d-flex flex-column align-items-center">
        <img
          src={secondImgSrc}
          className="profileimage rank-box2-pic"
        />
        <p className="ranks-name rank-box2-name">{second.username}</p>
        <p className="ranks-position rank-box2-pos">
          2<span className="ranks-suffix">nd</span>
        </p>
      </div>

      <div className="rank-box3 ranks-box d-flex flex-column align-items-center">
        <img
          src={thirdImgSrc}
          className="profileimage rank-box3-pic"
        />
        <p className="ranks-name rank-box3-name">{third.username}</p>
        <p className="ranks-position rank-box3-pos">
          3<span className="ranks-suffix">rd</span>
        </p>
      </div>
    </div>
  );
}

export default Ranks;
