import React from 'react'
import { AiOutlineArrowRight, AiOutlineClose} from "react-icons/ai";
import './popup.css';

export default function Popup1({remove1, add2, first }) {

  const handleClick = () => {
    remove1(false);
    add2(true);
    first(2);
  }

  const handleClose=()=>{
    remove1(false);
  }
  return (
    <div>
      <div className='hint-content'>
        <div className='hint-title'>
          <p className='hint-title-text'>Hint 1</p>
          <AiOutlineClose className='hint-close' onClick={handleClose}/>
        </div>
        <div className='hint-body'>
          <p className='hint-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='hint-body-title'>Want another hint?</p>
          <p className='hint-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          <button className='hint-button' onClick={handleClick}>
            <span className='hint-button-text'>Proceed</span>
            <AiOutlineArrowRight className="hint-right-arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}
