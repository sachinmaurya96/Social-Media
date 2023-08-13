import React from 'react'
import "./ProfileCard.css"
import Cover from "../../../../img/cover.jpg"
import Profile from "../../../../img/profileImg.jpg"
import { Link } from 'react-router-dom'
function ProfileCard({profilePage}) {
  
  return (
    <div className='ProfileCard'>
      <div className="profileImages">
        <img src={Cover} alt="cover" />
        <img src={Profile} alt="cover" />
      </div>
      <div className="profileName">
        <span>Zendsys MJ</span>
        <span>Senior UI/UX designer</span>
      </div>
      <div className="folloStatus">
        <hr />
        <div>
            <div className="follow">
                <span>6890</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>1</span>
                <span>Follwers</span>
            </div>
             {
              profilePage && (
                <>
                 <div className="vl"></div>
            <div className="follow">
                <span>3</span>
                <span>post</span>
            </div>
                </>
              )
             }
        </div>
        <hr />
      </div>
      {
        !profilePage && <span>
        <Link to="/profile" className='link'>My Profile</Link>
      </span>
      }
    </div>
  )
}

export default ProfileCard
