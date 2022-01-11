import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import './popup.css';

function Popup0() {
  return (
    <div>
      <div className='hint-content'>
        <div className='hint-title'>
          <p className='hint-title-text'>Need hints?</p>
        </div>
        <div className='hint-body'>
          <p className='hint-body-title'>Caution</p>
          <p className='hint-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='hint-button'>
            <span className='hint-button-text'>Proceed</span>
            <AiOutlineArrowRight className="hint-right-arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup0
