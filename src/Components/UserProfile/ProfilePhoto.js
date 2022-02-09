import React from "react";
import ImageUpload from "./ImageUpload";

function ProfilePhoto() {
  return (
    <div className="profilephoto">
      <div className="ic"></div>
      <img
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
        className="profile-image"
      />
      <div className="name">jonathan byres</div>
     
      <ImageUpload />
    </div>
  );
}

export default ProfilePhoto;
