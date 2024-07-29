import React from 'react'
import delivery from '../assets/images/icon-delivery.png'
import service from '../assets/images/Icon-Customer service.png'
import secure from '../assets/images/Icon-secure.png'

export const Details = () => {
  return (
    <>
        <section id="details">
            <div className ="details">
                <div className ="de-1">
                    <div className ="de-img">
                        <img className ="d-icon" src={delivery} alt='no_img'/>
                    </div>    
                    <h4>free and fast delivery</h4>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className ="de-1">
                    <div className ="de-img">
                        <img className ="d-icon" src={service} alt='no_img'/>
                    </div> 
                    <h4>24/7 customer service</h4>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className ="de-1">
                    <div className ="de-img">
                        <img className ="d-icon" src={secure} alt='no_img'/>
                    </div> 
                    <h4>money back guarantee</h4>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>
        </section>
    </>
  )
}
