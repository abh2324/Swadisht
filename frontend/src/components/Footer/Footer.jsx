import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id = 'footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo}></img>
            <p>Welcome to Swadisht, where culinary passion meets exquisite taste. Our website is your gateway to a world of authentic, flavorful dishes crafted with the finest ingredients and a touch of love. Whether you're seeking traditional recipes or modern culinary delights, Swadisht promises an unforgettable gastronomic journey. Join us to explore, savor, and celebrate the rich tapestry of flavors that define our unique culinary identity </p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=""></img>
                <img src={assets.twitter_icon} alt=""></img>
                <img src={assets.linkedin_icon} alt=""></img>
            </div>
        </div>
        <div className='footer-content-right'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-centre'>
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+91-8429751929</li>
                <li>ashutoshwork05@gmail.com</li>
             </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 Swadisht.com -All Rights Reserved.</p>
    </div>
  )
}

export default Footer
