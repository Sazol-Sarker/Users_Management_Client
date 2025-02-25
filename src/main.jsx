import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUser from './AddUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/addUser',
        element:<AddUser></AddUser>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
)
