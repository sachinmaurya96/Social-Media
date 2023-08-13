import React from "react";
import "./Auth.css";
import Logo from "../../../img/logo.png";
import { useForm } from "react-hook-form"

function Auth() {
 
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="webname">
          <h1>ZKC Media</h1>
          <h6>Wxplore the Ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login/>
    </div>
  );
}
function Login(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log("submit");
  } 
  return(
    <div className="a-right">
  <form action="" onSubmit={onSubmit} className="signupForm loginForm">
    <h3>login</h3>
    <div>
      <input
        type="email"
        placeholder="Email"
        className="infoInput"
        name="email"
      />
      <input
        type="password"
        placeholder="password"
        className="infoInput"
        name="password"
      />
    </div>
    <div>
      <span style={{fontSize:"12px"}}>Dont have an account. signup?</span>
    </div>
    <button className="button signup-Button" type="submit">Login</button>
  </form>
</div>
  )
}
function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="signupForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="pasword"
            className="infoInput"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm pasword"
            className="infoInput"
            name="confirmPassword"
          />
        </div>
        <div>
          <span style={{fontSize:"12px"}}>Already have an account. login?</span>
        </div>
        <button className="button signup-Button" type="submit">SignUp</button>
      </form>
    </div>
  );
}
export default Auth;
