import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <div> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis saepe tenetur possimus cumque iusto similique temporibus fuga eos, earum consectetur!</p>
                    <div className="footer-social-icon">
<a href="https://www.facebook.com/kireyyy.parajuli000" target='_blank'><img src={assets.facebook_icon} alt="" /></a>
                        
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        
                    </div>
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMAPNY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
             </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+977-9812345678</li>
                    <li>Parajulikiran690@gmail.com</li>
                </ul>
            </div>
        </div> <hr></hr>
      <p className="footer-copyright">Coprright 2025 - All Right Reserved.</p>
    </div>
  )
}

export default footer
