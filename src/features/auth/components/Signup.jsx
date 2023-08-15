import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { createUserAsync } from "../authSlice"
import { Link } from "react-router-dom"
export function Signup() {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const onSubmit = (data)=>{
     if(data.password===data.confirmPassword){
      const userdata = {
        firstName:data.firstName,
        lastName:data.lastName,
        password:data.password,
        email:data.email
      }
      dispatch(createUserAsync(userdata))
     }else{
      console.log("password is not matching")
     }
    }
  
    return (
      <div className="a-right">
        <form onSubmit={handleSubmit(onSubmit)} className="signupForm">
          <h3>Sign Up</h3>
          <div>
            <input
              type="text"
              placeholder="First name"
              className="infoInput"
              {...register("firstName", {
                required: true
              })}
            />
            <input
              type="text"
              placeholder="Last name"
              className="infoInput"
              {...register("lastName", {
                required: true
              })}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="email"
              className="infoInput"
              {...register("email", {
                required: true
              })}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="pasword"
              className="infoInput"
              name="password"
              {...register("password", {
                required: true
              })}
            />
            <input
              type="password"
              placeholder="Confirm pasword"
              className="infoInput"
              {...register("confirmPassword", {
                required: true
              })}
            />
          </div>
          <div>
            <span style={{fontSize:"12px"}}>Already have an account. <Link to="/auth">login?</Link></span>
          </div>
          <button className="button signup-Button" type="submit">SignUp</button>
        </form>
      </div>
    );
  }