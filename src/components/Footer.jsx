import React from 'react'
import Send from '../assets/images/icon-send.svg'
import Qr from '../assets/images/Qr Code.png'
import GooglePlay from '../assets/images/GooglePlay.png'
import ApplePlay from '../assets/images/AppStore.png'
import Facebook from '../assets/images/Icon-Facebook.svg'
import Twitter from '../assets/images/Icon-Twitter.svg'
import Instagram from '../assets/images/icon-instagram.svg'
import Linkedin from '../assets/images/Icon-Linkedin.svg'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
        <section id="footer">
            <div className="ft-top">
                <div className="ft-1">
                    <div className="ft-1-1">
                        <h5>Exclusive</h5>
                        <h6>Subscribe</h6>
                        <p>Get 10% off your first order</p>
                        <div className="ft-1-mail">
                            <input type="email" placeholder="Enter your email"/>
                            <img src={Send} alt='no_img'/>
                        </div>
                    </div>
                    <div className="ft-1-2">
                        <h6>Support</h6>
                        <p>111 Bijoy sarani,Dhaka,DH 1515,Bangladesh</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-99999</p>
                    </div>
                </div>
                <div className="ft-2">
                    <div className="ft-2-1">
                        <h6>Account</h6>
                        <Link to="/">My Account</Link >
                        <Link to="/">Login/Register</Link >
                        <Link to="/">Cart</Link >
                        <Link to="/">Wishlist</Link >
                        <Link to="/product">Shop</Link >
                    </div>
                    <div className="ft-2-1">
                        <h6>Quick Link</h6>
                        <Link to="/">Privacy Policy</Link >
                        <Link to="/">Terms Of Use</Link >
                        <Link to="/">FAQ</Link >
                        <Link to="/">Contact</Link >
                    </div>
                    <div className="ft-3">
                        <h6>Download App</h6>
                        <div className="ft-3-1">
                            <p>Save $3 with App New User Only</p>
                            <div className="ft-3-top">
                                <div className="ft-3-left">
                                    <img src={Qr} alt='no_img'/>
                                </div>
                                <div className="ft-3-right">
                                    <img src={GooglePlay} alt='no_img'/>
                                    <img src={ApplePlay} alt='no_img'/>
                                </div>
                            </div>
                            <div className="ft-3-btm">
                                <img src={Facebook} alt='no_img'/>
                                <img src={Twitter} alt='no_img'/>
                                <img src={Instagram} alt='no_img'/>
                                <img src={Linkedin} alt='no_img'/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section id="copyrights">
            <div className="ft-btm">
                <p>&copy; Copyright Rimel 2022. All right reserved</p>
            </div>
        </section>
    </>
  )
}
