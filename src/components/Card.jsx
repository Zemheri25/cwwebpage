import React from 'react'
import "./Card.css";
import HTML from "../assets/logo_html.png"
import CSS from "../assets/logo_css.png"
import BRUSH from "../assets/logo_brush.png"
import { useNavigate } from 'react-router-dom';

const Card = () => {

  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/html")
  }

  const handleClick2 = () => {
    navigate("/css")
  }

  const handleClick3 = () => {
    navigate("/logo")
  }


  return (
    <div className='cards' >
      <div className='card'>
          <img src={HTML} alt="htmllogo" onClick={handleClick1} style = {{cursor : "pointer"}}/>
          <h1>HTML5 Markup</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur voluptatum facilis molestiae quidem atque.</p>
      </div>

      <div className='card' >
          <img src={CSS} alt="csslogo" onClick={handleClick2} style = {{cursor : "pointer"}}/>
          <h1>HTML5 Markup</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur voluptatum facilis molestiae quidem atque.</p>
      </div>

      <div className='card'>
          <img src={BRUSH} alt="brushlogo" onClick={handleClick3} style = {{cursor : "pointer"}}/>
          <h1>HTML5 Markup</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur voluptatum facilis molestiae quidem atque.</p>
      </div>
    </div>
  )
}

export default Card