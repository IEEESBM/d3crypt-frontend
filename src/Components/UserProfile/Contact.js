import React from "react";
import { AiFillEdit } from "react-icons/ai";

function Contact({ person, setPerson, handleChange, editField }) {
  return (
    <div className="contact">
      <div className="contactheading">Contact</div>

      <p className="contacttitle">Name</p>
      <div className="data-and-button">
        <input
          className="contactdata fullName"
          name="fullName"
          value={person.fullName}
          onChange={handleChange}
          readOnly
        />
        <AiFillEdit
          className="editfield fullName"
          onClick={() => editField("fullName")}
        />
      </div>

      <p className="contacttitle">Email</p>
<div className="phoneError error"></div>
      <div className="data-and-button">
        <input
          className="contactdata email"
          name="email"
          value={person.email}
          onChange={handleChange}
          readOnly
        />
        {/* <AiFillEdit
          className="editfield email"
          onClick={() => editField("email")}
        /> */}
      </div>

      <p className="contacttitle">Mobile Number</p>
      <div className="data-and-button">
        <input
          className="contactdata mobileNo"
          name="mobileNo"
          value={person.mobileNo}
          onChange={handleChange}
          readOnly
        />
        <AiFillEdit
          className="editfield mobileNo"
          onClick={() => editField("mobileNo")}
        />
      </div>
    </div>
  );
}

export default Contact;
