import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className='footer-content'>
       <div className='left'>
        <img src={assets.logo}/>
         
        <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
        <div className='footer-social-icons'>
         <img src={assets.facebook_icon}/>
         <img src={assets.twitter_icon}/>
         <img src={assets.linkedin_icon}/>
        </div>
       </div>
       <div className='center'>
        <h2>COMPANY</h2>
         <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Delivery</li>
         <li>Privacy Policy</li>
         </ul>
       </div>
       <div className='right'>
         <h2>GET IN TOUCH</h2>
         <ul>
         <li>+919517009645</li>
         <li>ashishmauryaam57@gmail.com</li>
         </ul>
       </div>

     </div>
      <hr/>
      <p className='footer-copy'>
      Copyright 2024 @Tomato.com- All right Reserved
      </p>
    </div>
  )
}

export default Footer