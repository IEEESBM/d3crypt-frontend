import { React, useState, useEffect} from 'react'
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
          <p className='hint-body-title'>Caution quester</p>
          <p className='hint-body-content'>The help you seek will cost you precious points. <br/>
-30 for the first, -50 for the second.<br/>
Are you prepared to make that gamble?</p>
          <button className='hint-button' onClick={handleClick}>
            <span className='hint-button-text' >Proceed</span>
            <AiOutlineArrowRight className="hint-right-arrow" />
            <div className='hint-button-overlay'></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup0
