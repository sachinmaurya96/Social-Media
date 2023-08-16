import React from 'react'
import "./Feed.css"
import comment from "../../../../img/comment.png"
import share from "../../../../img/share.png"
import like from "../../../../img/like.png"
import notlike from "../../../../img/notlike.png"
function Feed({data}) {
  return (
    <div className='feed'>
      <img src={data.Image ? "http://localhost:8080/images/"+data.Image:""} alt={data.name} />
      <div className="feedReact">
        <img src={data.liked? like : notlike} alt="notlike" />
        <img src={comment} alt="comments" />
        <img src={share} alt="share" />
      </div>

      <span style={{color:"var(--gray)" ,fontSize:"12px"}}>{data.likes} Likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Feed
