import React from 'react'
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom'
import Home from "../Pages/Home"
import About from '../Pages/About'
import Services from "../Pages/Services"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Html from "../Pages/Html"
import Css from "../Pages/Css";
import Logo from "../Pages/Logo"

const route = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/services' element = {<Services />}/>
        <Route path='/html' element = {<Html />}/>
        <Route path='/css' element = {<Css />}/>
        <Route path='/logo' element = {<Logo />}/>
    </Routes>
    <Footer />
    </Router>
  )
}

export default route;