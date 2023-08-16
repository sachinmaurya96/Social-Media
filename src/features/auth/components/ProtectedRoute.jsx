import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchLoggedInuserAsync, selectLoggedInUser } from '../authSlice'
function ProtectedRoute({children}) {
  const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("profile"))
   useEffect(()=>{dispatch(fetchLoggedInuserAsync())})
  return (
    <>
    {user?.token ?children : <Navigate to="/auth"/>}
    </>
  )
}

export default ProtectedRoute
