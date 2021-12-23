import React from "react";

function RanksBox(props) {
  return (
    <>
      <div
        className="ranks-box d-flex flex-column justify-content-end align-items-center align-self-end align-self-sm-end"
        style={{
          position: "absolute",
          background: props.bgc,
          boxShadow: props.bxs,
          width: props.w,
          height: props.h,
          top: props.topp,
          left: props.leftp,
          borderRadius: "1.388vw",
          lineHeight: "9.722vw",
        }}
      >
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
          alt="ProfilePic"
          className="profileimage"
          style={{
            top: props.top_pic,
            width: props.sizee,
            height: props.sizee,
          }}
        />
        <p
          className="ranks-name"
          style={{
            top: props.topn,
            width: "9.166vw",
            height: "2.361vw",
          }}
        >
          Alpha Beta
        </p>
        <p
          className="ranks-position"
          style={{
            top: props.topb,
          }}
        >
          {props.pos}
          <span className="ranks-suffix">{props.suffix}</span>
        </p>
      </div>
    </>
  );
}

export default RanksBox;
