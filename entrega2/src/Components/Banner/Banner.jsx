import React from 'react'
import Image from 'react-bootstrap/Image';
import banner from "../Banner/banner.png"

const Banner = ({greeting}) => {
  return (
  <div className="text-center">
    <div><h1 className='saludo'>{greeting}</h1>      
      </div>
    <div><Image src={banner}  alt="banner" thumbnail /></div>
    
</div>
  )
}

export default Banner