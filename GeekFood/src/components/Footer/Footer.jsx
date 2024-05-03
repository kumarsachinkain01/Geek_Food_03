import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'



const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className='footer-content'>
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia, iusto hic quasi cumque corrupti, unde fugiat non animi nobis quisquam soluta quaerat natus! Rem unde aspernatur deserunt suscipit nisi!
            Ut tenetur voluptate doloremque  corrupti eaque. Quidem, sunt nisi? Dolorum sed sunt minima recusandae consequatur cumque omnis?
            </p>
            <div className="footer-social-icons">
              <img src={assets.linkedin_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.facebook_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+1-212-767-9086</li>
            <li>contact@tomato1995.com</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2023 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
