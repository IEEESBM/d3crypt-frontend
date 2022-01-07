import React, { useEffect, useState } from "react";
import "./UserProfile.css";
// import MobileNavbar from "../MobileNav/MobileNav";
import Sidebar from "./Sidebar";
import ProfilePhoto from "./ProfilePhoto";
import Contact from "./Contact";
import College from "./College";
import ImageUpload from "./ImageUpload";
import ChangePassword from "./ChangePassword";
import axios from "axios";
import MobileNavbar2 from "../MobileNav2/MobileNav2";

function UserProfile() {

  useEffect(() => {
    var token = localStorage.getItem("jwt");
    if (token) {
      var base64Payload = token.split(".")[1];
      var payload = Buffer.from(base64Payload, "base64");
      var userID = JSON.parse(payload.toString()).id;
      console.log(userID);
      axios
        .post("http://localhost:4000/get-user", {
          uid: `${userID}`,
        })
        .then(
          (response) => {
            console.log(response.data);
            if ((response.data.mem === true) && (response.data.memNo !== null)) {
              setPerson({ ...person, memNo: response.data.memNo });
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log("User not found");
    }
  }, [])

  const [person, setPerson] = useState({
    fullName: "shreyas shah",
    email: "shreyaslshah@gmail.com",
    mobileNo: "9136698199",
    college: "mit",
    applicationId: "200905404",
    password: "teammate",
    memNo: ""
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
    if (field.type === 'password') {
      field.type = 'text';
    }
    else {
      field.type = 'password';
    }
  }

  return (
    <>
      <MobileNavbar2 />

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
            <ChangePassword
              person={person}
              setPerson={setPerson}
              handleChange={handleChange}
              editField={editField}
            />
          </div>

          <div className="buttons">
            <a href="#">
              <div className="updatebutton">
                Update
                <div className="overlay"></div>
              </div>
            </a>
            <a href="#">
              <div className="backbutton">
                Back
                <div className="overlay"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
