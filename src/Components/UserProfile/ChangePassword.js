import React, { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
function ChangePassword({ person, setPerson, handleChange, editField }) {

  useEffect(() => {

  })

  return (
    <div className="details">
      <div className="detailsheading">Utilities</div>

      <p className="detailstitle">Forgot your Password ?</p>
      <div className="data-and-button">
      <Link to={"/forgot"} class="modal-click">
      <button type="button" class="modal-but" >
     <span class="buttext">
                  Forgot Password
                  </span>
                  <div className="overlay"></div>
                 
                </button>
                </Link>
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
              <a href="https://www.ieee.org">
              <div className="data-and-button">
               
                <button type="button" class="modal-click">
                  Click here to get one!
                  <div className="overlay"></div>
                </button>
                
              </div>
              </a>
            </>
          )
      }

    </div>
  );
}

export default ChangePassword;
