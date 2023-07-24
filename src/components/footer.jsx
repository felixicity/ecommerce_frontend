import React from 'react'
import {FaFacebookF, FaTwitter, FaWhatsapp ,FaCaretUp,FaCcStripe,FaCcMastercard, FaCcVisa, FaCcPaypal} from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
  return (
        <footer >
        <div className='wrapper'>
            <p className='back-to-top'>
                <FaCaretUp/>
                <p> Back to Top</p>
            </p>
            <div className='footer-nav'>
                    <ul>
                        <li>Sign in</li>
                       <li>Customer Service</li>
                        <li>Help</li>
                        <li>FAQ's</li>
                        <li>Your Wishlists</li>
                    </ul>
                    <ul>
                        <li>Your Orders</li>
                        <li>Your account</li>
                        <li>Recommendations for You</li>
                        <li>Browsing History</li>
                    </ul>
                    
            </div>
            <div className="base">
                <p>Connect with Us</p>
                <div className="icons">
                            <FaTwitter className='icon'/>
                            <FaWhatsapp className='icon'/>
                            <FaFacebookF className='icon'/>
                            <HiMail className='icon'/>
                    </div>
                <div className="payment">
                    <FaCcMastercard/>
                    <FaCcVisa/>
                    <FaCcPaypal/>
                    <FaCcStripe/>
                </div>
                <small>
                    &copy; Babreux 2023. All rights reserved
                </small>
            </div>
            </div>
        </footer>
  )
}

export default Footer