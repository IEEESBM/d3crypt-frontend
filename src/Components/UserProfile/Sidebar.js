import React from 'react';
import { ReactComponent as Smallicon } from './smallicon.svg';
import { AiFillHome, AiFillSetting, AiFillEdit } from 'react-icons/ai';
import { MdLeaderboard } from 'react-icons/md';

function Sidebar() {
  return (
    <div className='sidebar'>
      <a href="/"><Smallicon className='smallicon' /></a>
      <a href="#"><AiFillHome className='homeicon' /></a>
      <a href="#"><MdLeaderboard className='leaderboardicon' /></a>
      <a href="#"><AiFillSetting className='settingsicon' /></a>
    </div>
  )
}

export default Sidebar
