import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link, Navigate } from "react-router-dom";
import { LoginUserAsync, selectAuthLoading, selectLoggedInUser } from "../authSlice";
import { useSelector } from "react-redux";
export function Login(){

  const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
      const userData = {email:data.email,password:data.password}
      dispatch(LoginUserAsync(userData))
    } 

    const user = useSelector(selectLoggedInUser)
    const loading = useSelector(selectAuthLoading)

    console.log("loading",loading)
    return(
      <>
     
      <div className="a-right">
    <form action="" onSubmit={handleSubmit(onSubmit)} className="signupForm loginForm">
      <h3>login</h3>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="infoInput"
          {...register("email", {
            required: true
          })}
        />
        <input
          type="password"
          placeholder="password"
          className="infoInput"
          {...register("password", {
            required: true
          })}
        />
      </div>
      <div>
     {user &&  <span style={{fontSize:"12px",color:"red"}}>{user.message}</span>}
      </div>
      <div>
        <span style={{fontSize:"12px"}}>Dont have an account. <Link to="/auth/signup">signup?</Link></span>
      </div>
      <button className="button signup-Button" type="submit" disabled={loading}>Login</button>
    </form>
  </div>
      </>
    )
  }