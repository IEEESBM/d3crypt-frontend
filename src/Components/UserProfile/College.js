import React from 'react'
import { AiFillEdit } from 'react-icons/ai';


function College({person, setPerson, handleChange, editField}) {
  return (
    <div className='details'>
      <div className="detailsheading">College</div>

      <p className="detailstitle">College Name</p>
      <div className='data-and-button'>
        <input className='detailsdata college' name='college' value={person.college} onChange={handleChange} readOnly />
        <AiFillEdit className='editfield college' onClick={() => editField('college')} />
      </div>

      <p className="detailstitle">Application ID</p>
      <div className='data-and-button'>
        <input className='detailsdata applicationId' name='applicationId' value={person.applicationId} onChange={handleChange} readOnly />
        <AiFillEdit className='editfield applicationId' onClick={() => editField('applicationId')} />
      </div>

    </div>
  )
}

export default College
