import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import NavBar from './Components/NavBar/NavBar'
import About from "./pages/About"
import Details from './pages/Details'
import Contact from './pages/Contact'
import SubHeader from './Components/SubHeader/SubHeader'
import Footer from './Components/Footer/Footer'
import Logo from './Components/Logo/Logo'
function App() {
  return (
    <>
      <SubHeader />
        <header className="header-area header-sticky ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                 <Logo /> 
                 <NavBar/>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/details' element={<Details />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes> 
      <Footer />
    </>
  )
}

export default App
