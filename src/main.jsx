import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MessageInput from './Components/MessageInput.jsx';
import App from './App.jsx';
import Emisor from './Components/Emisor.jsx';
import Receptor from './Components/Receptor.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<MessageInput></MessageInput>
      },
      {
        path:"/:binary",
        element:<Emisor></Emisor>
      },
      {
        path:"/receptor/:binary",
        element: <Receptor></Receptor>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
