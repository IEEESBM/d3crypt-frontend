import React, { useState } from "react";
import "./UserProfile.css";
import MobileNavbar from "../MobileNav/MobileNav";
import Sidebar from "./Sidebar";
import ProfilePhoto from "./ProfilePhoto";
import Contact from "./Contact";
import College from "./College";
import Teammate from "./Teammate";
import ImageUpload from "./ImageUpload";

function UserProfile() {
  const [person, setPerson] = useState({
    fullName: "shreyas shah",
    email: "shreyaslshah@gmail.com",
    mobileNo: "9136698199",
    college: "mit",
    applicationId: "200905404",
    teamMateName: "teammate",
    teamMateEmail: "teammate@google.com",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  }

  function editField(className) {
    document
      .querySelector(`.editfield.${className}`)
      .classList.toggle("editfieldclicked");

    const field = document.querySelector(`input.${className}`);
    if (field.readOnly === true) {
      field.readOnly = false;
      field.classList.toggle("datafocus");
      field.focus();
    } else {
      field.readOnly = true;
      field.classList.toggle("datafocus");
    }
  }

  return (
    <>
      <MobileNavbar />
      <ImageUpload />

      <div id="userprofile">
        <Sidebar />

        <div className="content">
          <h1 className="header">
            <p className="page-heading">User Profile</p>
            <p className="heading-line">
              <hr />
            </p>
          </h1>

          <div className="row1">
            <ProfilePhoto />
            <Contact
              person={person}
              setPerson={setPerson}
              handleChange={handleChange}
              editField={editField}
            />
          </div>

          <div className="row2">
            <College
              person={person}
              setPerson={setPerson}
              handleChange={handleChange}
              editField={editField}
            />
            <Teammate
              person={person}
              setPerson={setPerson}
              handleChange={handleChange}
              editField={editField}
            />
          </div>

          <div className="buttons">
            <a href="#">
              <div className="updatebutton">Update</div>
            </a>
            <a href="#">
              <div className="backbutton">Back</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
