import React from 'react'
import "./Profile.css"
import ProfileLeft from './components/ProfileLeft'
import ProfileCard from '../../features/profile/components/profilecard/ProfileCard'
import Post from '../../features/post/components/Post'
import RightSide from '../../features/rightSide/components/RightSide'
function Profile() {
  return (
    <div className="userProfile">
        <ProfileLeft/>
        <div className="profile-center">
            <ProfileCard/>
            <Post/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile
