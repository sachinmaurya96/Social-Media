import React from 'react'
import "./Auth.css"
import Logo from "../../img/logo.png"
function Auth() {
  return (
    <div className='Auth'>
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="webname">
            <h1>ZKC Media</h1>
            <h6>Wxplore the Ideas throughout the world</h6>
        </div>
      </div>
    </div>
  )
}

export default Auth
