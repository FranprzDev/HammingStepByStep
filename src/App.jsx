import Header from './Components/Header'
import Footer from './Components/Footer'
import './Styles/index.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
