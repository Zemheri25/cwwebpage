import React from 'react'
import Input from "../components/Input"
import "./Services.css"

const Services = () => {
  return (
    <div className='services'>  
    <Input />

    <div className='main'>
      <div className='left'>
        <h1>Services</h1>
        <div className='left1'>
          <h2>WebsiteDesign</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, modi commodi. Saepe laudantium excepturi cum fugiat aspernatur. Hic, nobis magnam.</p>

          <p>Pricing : $1,000 - $3,000</p>
        </div>

        <div className='left1'>
          <h2>Website Maintenance</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, modi commodi. Saepe laudantium excepturi cum fugiat aspernatur. Hic, nobis magnam.</p>

          <p>Pricing : $250</p>
        </div>

        <div className='left1'>
          <h2>Website Hoisting</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, modi commodi. Saepe laudantium excepturi cum fugiat aspernatur. Hic, nobis magnam.</p>

          <p>Pricing : $1500</p>
        </div>

      </div>

      <div className='right'>
        <h1>Get A Quote</h1>
          <label htmlFor="name">Name</label>
          <input type="text" id='name'placeholder='Name:' className='input1'/>
          <label htmlFor="email">Email</label>
          <input type="email" id='email'placeholder='Email Adress' className='input1'/>
          <label htmlFor="text">Message</label>
          <input type="text" name="text" id="text" className='input1' placeholder='Message'/>
          <button className='mybutton'>Send</button>
          
      </div>

    </div>


    </div>
  )
}

export default Services