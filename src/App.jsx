import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Nav from './Components/Nav'


function App() {
 

  return (
    <>
      <Nav></Nav>

          <Outlet></Outlet>

      <Footer></Footer>
    </>
  )
}

export default App
