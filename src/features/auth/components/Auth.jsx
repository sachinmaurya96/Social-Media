import React, { useEffect } from "react";
import "./Auth.css";
import Logo from "../../../img/logo.png";
import {  selectLoggedInUser } from "../authSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";



function Auth() {
  
  const user = useSelector(selectLoggedInUser)
  return (
    <>
     {user?.token ?<Navigate to="/"/> :
     <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="webname">
          <h1>ZKC Media</h1>
          <h6>Wxplore the Ideas throughout the world</h6>
        </div>
      </div>
     <Outlet/>
    </div>}
    </>
  );
}
export default Auth;
