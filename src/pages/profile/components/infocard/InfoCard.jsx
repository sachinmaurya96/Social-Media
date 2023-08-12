import React from 'react'
import "./InfoCard.css"
import { BsPencil } from "react-icons/bs";
function InfoCard() {
  return (
    <div className='infoCard'>
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>

        <BsPencil style={{fontSize:"15px"}}/>
        </div>
      </div>
      <div className="info">
        <span>
            <b>Status </b>
        </span>
        <span>
            in RelationShip
        </span>
      </div>
      <div className="info">
        <span>
            <b>Lives </b>
        </span>
        <span>
            Noida
        </span>
      </div>
      <div className="info">
        <span>
            <b>Works At </b>
        </span>
        <span>
            Microsoft
        </span>
      </div>
      <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard
