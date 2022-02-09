import React, { useEffect, useState } from "react";
import "./UserProfile.css";
// import MobileNavbar from "../MobileNav/MobileNav";
import Sidebar from "./Sidebar";
import ProfilePhoto from "./ProfilePhoto";
import Contact from "./Contact";
import College from "./College";
import ImageUpload from "./ImageUpload";
import ChangePassword from "./ChangePassword";
import MobileNavbar2 from "../MobileNav2/MobileNav2";
var data;

const axios = require("axios");
var db;
var idy;
var jwt;
function UserProfile() {
  useEffect(async () => {
     jwt = JSON.parse(localStorage.getItem("jwt"));
     await axios
     .get("https://d3crypt-backend.herokuapp.com/check-verified", {
       headers: {
         "x-access-token": jwt,
       },
     })
     .then((res) => {
       console.log(res);
       if (res.data === "allow_access") {
         console.log(res.data);
       } else {
         window.location.href = "/";
       }
       // props.history.push("/")
     })
     .catch((err) => {
       console.log(err.message);
       window.location.href = "/";
     });
    
    

    axios.get("https://d3crypt-backend.herokuapp.com/users/:idy", { params: { id: jwt } })

      .then((res) => {
        console.log(res.data);
        db = res.data;
        data = res.data;
        
        document.querySelector(".name").innerHTML = data.username;
        setPerson({
          ...person,
          fullName: data.username,
          email: data.email,
          mobileNo: data.phone,
          college: data.college,
          idy:data.id,
          memNo: data.memNo,
          applicationId: data.ID,
        });
      });
  }, []);

  const [person, setPerson] = useState({
    fullName: " ",
    email: " ",
    mobileNo: " ",
    college: " ",
    applicationId: " ",
    password: " ",
    memNo: " ",
  });
  function submitHandler(e) {
    console.log(jwt);
    axios
      .get("https://d3crypt-backend.herokuapp.com/users/u", {
        params: {
          id: jwt,
          username: person.fullName,
          password: person.password,
          college: person.college,
          phone: person.mobileNo,
          ID: person.applicationId,
          memNo: person.memNo,
        },
      })
      .then((res) => {
        if (isNaN(person.mobileNo) == true)
          document.querySelector(".phoneError").innerHTML =
            "Please enter a valid phone number";
        else console.log(res.data);
      });
  }
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
    if (field.type === "password") {
      field.type = "text";
    } else {
      field.type = "text";
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
              <div className="updatebutton" onClick={submitHandler}>
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
