import React from 'react'
import "./About.css"
import Input from "../components/Input"

const About = () => {
  return (
    <div className='about'>
      <Input />
      <div className='general'>
        <div className='left'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorum repellendus provident cumque beatae ipsum aliquam sequi, accusantium soluta sunt fugiat reprehenderit voluptas vel earum necessitatibus fugit inventore, alias placeat veniam ad culpa officia doloribus? Iure autem amet atque incidunt fugiat porro itaque illum. Obcaecati blanditiis ex quos itaque at. Omnis magnam, labore repellat rem quidem accusantium ut non, officia ex, facere voluptatum eum adipisci expedita nesciunt. Doloribus ipsam ducimus rerum dignissimos praesentium error est in nobis! Ipsam eveniet maiores tempora, numquam placeat, modi at in pariatur vero odit libero soluta consequuntur saepe asperiores ipsa ullam! Quod laboriosam soluta officia?</p>

            <p style={{backgroundColor : "#34424A", color : "white", borderRadius : "10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex est ratione eos commodi ab id. Consequuntur laborum officiis aliquam, optio repellat quasi porro nobis illo ducimus voluptas debitis cumque, animi excepturi! Rem animi voluptatibus, iusto explicabo quae repudiandae mollitia omnis deleniti iure nulla quisquam incidunt maxime ullam impedit provident rerum recusandae sapiente, architecto reiciendis eaque, temporibus aut quam culpa? Suscipit placeat porro eveniet odio sed obcaecati a quasi qui optio fugiat ex, odit delectus et nisi rem voluptas saepe ipsa? Sed error molestias necessitatibus, cumque possimus voluptatem amet consectetur ducimus soluta, laboriosam quisquam temporibus, perferendis molestiae commodi quo suscipit!</p>
        </div>

        <div className='right'  style={{}}>
            <h1>What we Do</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eius repudiandae ipsum veniam consequuntur quisquam eligendi doloribus nesciunt. Iure, maiores suscipit? Quisquam maxime ea, quasi reprehenderit vel voluptates doloremque sed incidunt! Error soluta aperiam rem consequuntur, illo obcaecati vel non reprehenderit amet possimus iste, atque omnis deserunt minus consectetur. Tempora.</p>
        </div>
      </div>
    </div>
  )
}

export default About