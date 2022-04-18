import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='h1'><span style={{color : "#C48DB2"}}>Clarusway</span> WebDesign</h1>
        <div className='routes'>
            <Link className='link' to="/">HOME</Link>
            <Link className='link' to="/about">ABOUT</Link>
            <Link className='link' to="/services">SERVICES</Link>
        </div>
    </div>
  )
}

export default Navbar