import "./App.css"
import Auth from "./features/auth/components/Auth";
import Home  from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import AlertTemplate from 'react-alert-template-basic';
// import { RouterProvider } from 'react-router';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


import { Provider } from "react-alert";
import { Signup } from "./features/auth/components/Signup";
import { Login } from "./features/auth/components/Login";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLoggedInuserAsync, selectLoggedInUser } from "./features/auth/authSlice";
import { useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  console.log("app",user)
  useEffect(()=>{
    dispatch(fetchLoggedInuserAsync())
  })
  const router = createBrowserRouter([
   {
    path: '/',
    element:<ProtectedRoute><Home/></ProtectedRoute> ,
   },
   {
    path: '/profile',
    element: <Profile/>,
   
   },
   {
    path: '/auth',
    element: <Auth/>,
    children: [
      
      {
        path: "/auth",
        element: <Login/>,
      },
      {
        path: "/auth/signup",
        element: <Signup/>,
      },
    ],
   }
  ])
  return (
    <div className="App">
      <div className="blur" style={{top:"-18%", right:"0"}}></div>
      <div className="blur" style={{top:"36%", left:"-8rem"}}></div>
      <Provider template={AlertTemplate}>
            <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
