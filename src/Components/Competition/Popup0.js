import React from 'react'
import { AiOutlineArrowRight,AiOutlineClose } from "react-icons/ai";
import './popup.css';

function Popup0({remove0, add1 ,first}) {
  const handleClick = () => {
    remove0(false);
    add1(true);
    first(1);
  }

  const handleClose= () => {
    remove0(false);
  }
  return (
    <div>
      <div className='hint-content'>
        <div className='hint-title'>
          <p className='hint-title-text'>Need hints?</p>
          <AiOutlineClose className='hint-close' onClick={handleClose}/>
        </div>
        <div className='hint-body'>
          <p className='hint-body-title'>Caution</p>
          <p className='hint-body-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='hint-button' onClick={handleClick}>
            <span className='hint-button-text' >Proceed</span>
            <AiOutlineArrowRight className="hint-right-arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup0
