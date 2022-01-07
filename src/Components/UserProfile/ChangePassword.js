import React, { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";

function ChangePassword({ person, setPerson, handleChange, editField }) {

  useEffect(() => {

  })

  return (
    <div className="details">
      <div className="detailsheading">Utilities</div>

      <p className="detailstitle">Password</p>
      <div className="data-and-button">
        <input
          type='password'
          className="detailsdata password"
          name="password"
          value={person.password}
          onChange={handleChange}
          readOnly
        />
        <AiFillEdit
          className="editfield password"
          onClick={() => editField("password")}
        />
      </div>

      {
        person.memNo
          ? (
            <>
              <p className="detailstitle">IEEE Membership No.</p>
              <div className="data-and-button">
                <input
                  type='text'
                  className="detailsdata"
                  value={person.memNo}
                  readOnly
                />
              </div>
            </>
          )
          : (
            <>
              <p className="detailstitle">Don't have an IEEE Membership?</p>
              <div className="data-and-button">
                <button type="button" class="modal-click">
                  Click here to get one!
                  <div className="overlay"></div>
                </button>
              </div>
            </>
          )
      }

    </div>
  );
}

export default ChangePassword;
