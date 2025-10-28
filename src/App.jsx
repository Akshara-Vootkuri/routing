import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home'
import {Posts} from './Pages/Posts'
import {Users} from './Pages/Users'
import {Todos} from './Pages/Todos'
import { Layout } from './Components/Layout'
function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/posts",
          element:<Posts/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/todos",
          element:<Todos/>
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
