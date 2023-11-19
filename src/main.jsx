import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MessageInput from './Components/MessageInput.jsx';
import App from './App.jsx';
import Emisor from './Components/Emisor.jsx';
import Receptor from './Components/Receptor.jsx';
import ErrorView from './Components/Error.jsx';
import About from './Components/About.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement: <ErrorView></ErrorView>,
    children:[
      {
        path:"/",
        element:<MessageInput></MessageInput>
      },
      {
        path:"/:binary",
        element:<Emisor></Emisor>,
      },
      {
        path:"/receptor/:binary",
        element: <Receptor></Receptor>
      },
      {
        path:"/about",
        element: <About></About>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
