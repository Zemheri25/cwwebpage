import React from 'react'
import "./Input.css"

const Input = () => {
  return (
    <div className='input'>
        <h1 className='subs'>Subscribe To Our Newsletter</h1>
        <div className='mail'>
            <input type="email" name="email" id="email" className='emailinput'/>
            <button className='subsbutton'>Subscribe</button>
        </div>
    </div>
  )
}

export default Input