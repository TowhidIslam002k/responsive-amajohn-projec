import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './COMPONENT/Footer/Footer'
import Header from './COMPONENT/Header/Header'

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
