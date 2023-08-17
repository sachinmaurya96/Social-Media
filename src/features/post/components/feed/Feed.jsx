import React, { useState } from 'react'
import "./Feed.css"
import comment from "../../../../img/comment.png"
import share from "../../../../img/share.png"
import like from "../../../../img/like.png"
import notlike from "../../../../img/notlike.png"
import { useDispatch } from 'react-redux'
import { likePostAsync } from '../../postSlice'
import { useSelector } from 'react-redux'
function Feed({data}) {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("profile"))
  const handleLike = (id)=>{
    dispatch(likePostAsync({dataId:id,userId:user.user.id}))
    
  }
  console.log("feed",data.likes)

  return (
    <div className='feed'>
      <img src={data.Image ? "http://localhost:8080/images/"+data.Image:""} alt={data.name} />
      <div className="feedReact">
        <img src={data.likes.includes(user.user.id) ? like : notlike} alt="notlike" style={{cursor:"pointer"}} onClick={()=>handleLike(data.id)}/>
        <img src={comment} alt="comments" style={{cursor:"pointer"}}/>
        <img src={share} alt="share" style={{cursor:"pointer"}}/>
      </div>

      <span style={{color:"var(--gray)" ,fontSize:"12px"}}>{data.likes.length} Likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Feed
