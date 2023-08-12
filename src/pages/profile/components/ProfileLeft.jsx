import React from 'react'
import LogoSearch from '../../../features/profile/components/LogoSearch/LogoSearch'
import InfoCard from './infocard/InfoCard'
import FollowersCard from '../../../features/profile/components/folloersCard/FollowersCard'
function ProfileLeft() {
  return (
    <div className='Profile'>
      <LogoSearch/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
