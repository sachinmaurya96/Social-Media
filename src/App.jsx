import "./App.css"
import Auth from "./features/auth/components/Auth";
import ProfileForm from "./features/profile/components/profileForm/ProfileForm";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
// import { RouterProvider } from 'react-router';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


import { Provider } from "react-alert";
function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element: <Home/>,
   },
   {
    path: '/profile',
    element: <Profile/>,
   },
   {
    path: '/auth',
    element: <Auth/>,
   }
  ])
  return (
    <div className="App">
      <div className="blur" style={{top:"-18%", right:"0"}}></div>
      <div className="blur" style={{top:"36%", left:"-8rem"}}></div>
      <Provider >
            <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
