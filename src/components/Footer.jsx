import React from 'react'
import "./Footer.css";
import Clarusway from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer'>
      <p style={{color : "white"}}>Clarusway Web Design, Copyright © 2020</p>
      <a href="https://clarusway.com/" target="_blank"><img src={Clarusway} alt="cwlogo" /></a>
    </div>
  )
}

export default Footer