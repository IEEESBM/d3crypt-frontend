import { React, useState, useEffect } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import './popup.css';
import axios from "axios"

function Popup2({remove2, userID}) {

  const [hint1, setHint1] = useState('');
  const [hint2, setHint2] = useState('');

  useEffect(() =>{
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    console.log(jwt);
    console.log(userID)
    axios
      .put("https://d3crypt-backend.herokuapp.com/hint", {},{headers: {
        'x-access-token': jwt
      }})
      .then((res)=>{
        console.log(res);
        setHint1(res.data.hint1);
        setHint2(res.data.hint2);
      })
   },[])


  const handleClick = () => {
    remove2(false);
  }
  return (
    <div>
      <div className='hint-content'>
        <div className='hint-title'>
          <p className='hint-title-text'>All hints</p>
        </div>
        <div className='hint-body'>
          <p className='hint-body-title'>hint 1</p>
          <p className='hint-body-content'>{hint1}</p>
          <p className='hint-body-title'>hint 2</p>
          <p className='hint-body-content'>{hint2}</p>
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

export default Popup2
