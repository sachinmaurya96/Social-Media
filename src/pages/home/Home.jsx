import React from 'react'
import "./Home.css"
import Profile from '../../features/profile/components/Profile'
import Post from '../../features/post/components/Post'
import RightSide from '../../features/rightSide/components/RightSide'

function Home() {
  return (
    <div>
      <div className="Home">
        <Profile/>
       <Post/>
        <RightSide/>
      </div>
    </div>
  )
}

export default Home
