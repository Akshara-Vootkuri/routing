import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home'
import {Posts} from './Pages/Posts'
import {Users} from './Pages/Users'
import {Todos} from './Pages/Todos'
import { Layout } from './Components/Layout'
import { Error } from './Components/Error'
import { GetAPIUsers } from './api/GetAPIUsers'
import { GetAPIPosts } from './api/GetAPIPosts'
import { PostLoader } from './api/PostLoader'
import { TodoLoader } from './api/TodoLoader'
function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/posts/:page?",
          element:<Posts/>,
          loader:PostLoader
        },
        {
          path:"/users",
          element:<Users/>,
          loader:GetAPIUsers
        },
        {
          path:"/todos/:page?",
          element:<Todos/>,
          loader:TodoLoader
        }
      ]
    }
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
