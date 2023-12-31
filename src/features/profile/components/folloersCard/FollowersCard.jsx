import React from 'react'
import "./FollowersCard.css"
import { followers } from '../../../../Data/FollowersData'
function FollowersCard() {
  return (
    <div className='followersCard'>
      <h3>Who is following you</h3>
      {
        followers.map((follower,id)=>{
            return(
                <div className="follower" key={id}>
                    <div>
                        <img src={follower.img} alt={follower.username} className='followerImg'/>
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })
      }
    </div>
  )
}

export default FollowersCard
