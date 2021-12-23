import React from "react";
import { AiFillEdit } from "react-icons/ai";

function Teammate({ person, setPerson, handleChange, editField }) {
  return (
    <div className="details">
      <div className="detailsheading">Teammate</div>

      <p className="detailstitle">Teammate Name</p>
      <div className="data-and-button">
        <input
          className="detailsdata teamMateName"
          name="teamMateName"
          value={person.teamMateName}
          onChange={handleChange}
          readOnly
        />
        <AiFillEdit
          className="editfield teamMateName"
          onClick={() => editField("teamMateName")}
        />
      </div>

      <p className="detailstitle">Teammate Email</p>
      <div className="data-and-button">
        <input
          className="detailsdata teamMateEmail"
          name="teamMateEmail"
          value={person.teamMateEmail}
          onChange={handleChange}
          readOnly
        />
        <AiFillEdit
          className="editfield teamMateEmail"
          onClick={() => editField("teamMateEmail")}
        />
      </div>
    </div>
  );
}

export default Teammate;
