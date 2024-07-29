import React from 'react'
import { Category } from './Category'
import { Productlist } from './Productlist'
import appleImg from '../assets/images/Apple.png'
import home from '../assets/images/home.png'
import { Details } from './Details'
import Arrowicon from '../assets/images/Vector.png'
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <>
     <section id="home">
            <div className="home">
                <div className="left">
                    <div className="l-1">
                        <img src={appleImg} alt='no_img'/>
                        <p>iPhone 14 Series</p>
                    </div>
                    <h2>Up tp 10%<br/> off Voucher</h2>
                    <div className="l-3">
                        <Link to="/product">
                            <p>Shop Now</p>
                            <img className='arrow' src={Arrowicon} alt='No-img'/> 
                        </Link>                  
                     </div>
                </div>
            
                <div className="right">
                    <img src={home}  alt='no_img'/>
                </div>
            </div>
    </section> 
    <Category />
    <Productlist />
    <Details />
    </>
  )
}
