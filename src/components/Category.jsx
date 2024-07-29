import React from 'react'
import phone from '../assets/images/Category-CellPhone.svg'
import computer from '../assets/images/Category-Computer.svg'
import watch from '../assets/images/Category-SmartWatch.svg'
import headphone from '../assets/images/Category-Headphone.svg'
import gaming from '../assets/images/Category-Gamepad.svg'
import photo from '../assets/images/Category-Camera.svg'

export const Category = () => {
  return (
    <>
        <section id="category">
            <div className ="cate">
                <div className  ="cate-1">
                    <div className  ="cate-11"></div>
                    <p>Categories</p>
                </div>
                <h3>Browse By Category</h3>
                <div className ="cate-items">
                    <div className ="cate-item">
                        <img src={phone} alt='no_img'/>
                        <p>Phones</p>
                    </div>
                    <div className ="cate-item">
                        <img src={computer} alt='no_img'/>
                        <p>Computers</p>
                    </div>
                    <div className ="cate-item">
                        <img src={watch} alt='no_img'/>
                        <p>SmartWatch</p>
                    </div>
                    <div className ="cate-item">
                        <img src={headphone} alt='no_img'/>
                        <p>HeadPhones</p>
                    </div>
                    <div className ="cate-item">
                        <img src={gaming} alt='no_img'/>
                        <p>Gaming</p>
                    </div>
                    <div className ="cate-item">
                        <img src={photo} alt='no_img'/>
                        <p>Camera</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
