import React from 'react';
import './popup.css';
import { AiOutlineArrowRight } from "react-icons/ai";

function FinalPopup() {

  const handleClick = () => {
    window.location.href='/leaderboard'
  }

  return (
    <div>
      <div className='hint-content'>
        <div className='hint-title'>
          <p className='hint-title-text'>D3crypt Finished</p>
        </div>
        <div className='hint-body'>
          <p className='hint-body-content'>Congratulations!, you're done with all the questions</p>
          <button className='hint-button' onClick={handleClick}>
            <span className='hint-button-text'>Close</span>
            <AiOutlineArrowRight className="hint-right-arrow" />
            <div className='hint-button-overlay'></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FinalPopup