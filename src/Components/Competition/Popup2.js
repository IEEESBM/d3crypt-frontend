import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import './popup.css';

function Popup2() {
  return (
    <div>
      <div className='hint-content'>
        <div className='hint-title'>
          <p className='hint-title-text'>All hints</p>
        </div>
        <div className='hint-body'>
          <p className='hint-body-title'>hint 1</p>
          <p className='hint-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='hint-body-title'>hint 2</p>
          <p className='hint-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='hint-button'>
            <span className='hint-button-text'>Close</span>
            <AiOutlineArrowRight className="hint-right-arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hints2
