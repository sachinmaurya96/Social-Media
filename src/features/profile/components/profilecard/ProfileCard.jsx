import React, { useEffect } from 'react'
import "./ProfileCard.css"
import Cover from "../../../../img/cover.jpg"
import profile from "../../../../img/user.png"
import { Link } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import { getPostByIdAsync, selectPostByID } from '../../../post/postSlice'

function ProfileCard({profilePage}) {
  const dispatch = useDispatch()
  const post = useSelector(selectPostByID)
  const {user} = JSON.parse(localStorage.getItem("profile"))
 useEffect(()=>{
  dispatch(getPostByIdAsync(user.id))
 },[])
  return (
    <div className='ProfileCard'>
      <div className="profileImages">
        <img src={user.coverPicture ? "http://localhost:8080/images" + user.coverPicture : Cover} alt="cover" />
        <img src={user.profilePicture ?"http://localhost:8080/images" + user.profilePicture :  profile} alt="cover" />
      </div>
      <div className="profileName">
        <span>{user.firstName +" "+ user.lastName}</span>
        <span>{user.about}</span>
      </div>
      <div className="folloStatus">
        <hr />
        <div>
            <div className="follow">
                <span>{user.following.length}</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>{user.followers.length}</span>
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
