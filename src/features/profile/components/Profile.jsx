import React from 'react'
import "./Profile.css"
import LogoSearch from './LogoSearch/LogoSearch'
import ProfileCard from './profilecard/ProfileCard'
import FollowersCard from './folloersCard/FollowersCard'
function Profile() {
  let profilePage = false
  return (
    <div className='Profile'>
     <LogoSearch/>
     <ProfileCard profilePage={profilePage}/>
     <FollowersCard/>
    </div>
  )
}

export default Profile
