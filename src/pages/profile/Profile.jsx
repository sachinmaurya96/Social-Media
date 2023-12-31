import React from 'react'
import "./Profile.css"
import ProfileLeft from './components/ProfileLeft'
import ProfileCard from '../../features/profile/components/profilecard/ProfileCard'
import Post from '../../features/post/components/Post'
import RightSide from '../../features/rightSide/components/RightSide'
function Profile() {
  let profilePage = true
  return (
    <div className="userProfile">
        <ProfileLeft/>
        <div className="profile-center">
            <ProfileCard  profilePage={profilePage}/>
            <Post profilePage={profilePage}/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile
