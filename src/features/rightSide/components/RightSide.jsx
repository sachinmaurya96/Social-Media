import React from 'react'
import "./RightSide.css"
import Home from "../../../img/home.png"
import Noti from "../../../img/noti.png"
import Comment from "../../../img/comment.png"
import { AiOutlineSetting } from "react-icons/ai";
import TrendCard from './trendCard/TrendCard'
import { useState } from 'react'
import PostModal from '../../post/components/PostModal/PostModal'
import { Link } from 'react-router-dom'
function RightSide() {
  const [open,setOpen] = useState(false)
  return (
    <div className='rightSide'>
        <div className="navIcons">
            <Link to="/" className='link'><img src={Home} alt="home" /></Link>
            <AiOutlineSetting style={{fontSize:"1.5rem"}}/>
            <img src={Noti} alt="notification" />
            <img src={Comment} alt="chat" />
        </div>

        <TrendCard/>
        <button className='button r-button' onClick={()=>setOpen(!open)}>Share</button>
        {open && <PostModal setOpen={setOpen} open={open}/>}
    </div>
  )
}

export default RightSide
