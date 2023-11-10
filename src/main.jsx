import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MessageInput from './Components/MessageInput.jsx';
import App from './App.jsx';
import Emisor from './Components/Emisor.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<MessageInput tipo="Emisor"></MessageInput>
      },
      {
        path:"/receptor",
        element:<MessageInput tipo="Receptor"></MessageInput>
      },
      {
        path:"/:binary",
        element:<Emisor></Emisor>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
