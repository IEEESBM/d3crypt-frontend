import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import './popup.css';

export default function Popup1() {
  return (
    <div>
      <div className='hint-content'>
        <div className='hint-title'>
          <p className='hint-title-text'>Hint 1</p>
        </div>
        <div className='hint-body'>
          <p className='hint-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='hint-body-title'>Want another hint?</p>
          <p className='hint-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          <button className='hint-button'>
            <span className='hint-button-text'>Proceed</span>
            <AiOutlineArrowRight className="hint-right-arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}
