import React from 'react'
import "./Profile.css"
import LogoSearch from './LogoSearch/LogoSearch'
import ProfileCard from './profilecard/ProfileCard'
import FollowersCard from './folloersCard/FollowersCard'
function Profile() {
  return (
    <div className='Profile'>
     <LogoSearch/>
     <ProfileCard/>
     <FollowersCard/>
    </div>
  )
}

export default Profile
