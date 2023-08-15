import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const user = JSON.parse(localStorage.getItem("profile"))
    console.log(user)
  return (
    <>
    {user?.token ?children : <Navigate to="/auth"/>}
    </>
  )
}

export default ProtectedRoute
