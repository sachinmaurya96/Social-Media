import React from 'react'
import "./RightSide.css"
import Home from "../../../img/home.png"
import Noti from "../../../img/noti.png"
import Comment from "../../../img/comment.png"
import { AiOutlineSetting } from "react-icons/ai";
import TrendCard from './trendCard/TrendCard'
function RightSide() {
  return (
    <div className='rightSide'>
        <div className="navIcons">
            <img src={Home} alt="home" />
            <AiOutlineSetting style={{fontSize:"1.5rem"}}/>
            <img src={Noti} alt="notification" />
            <img src={Comment} alt="chat" />
        </div>

        <TrendCard/>
        <button className='button r-button'>Share</button>
    </div>
  )
}

export default RightSide
