import React from 'react';
import styled from 'styled-components';
import { Category } from './Category';
import { Productlist } from './Productlist';
import appleImg from '../assets/images/Apple.png';
import home from '../assets/images/home.png';
import { Details } from './Details';
import Arrowicon from '../assets/images/Vector.png';
import { Link } from 'react-router-dom';

const HomeSection = styled.section`
  padding: 50px 200px;
  width: 100%;

  @media (max-width: 1440px) {
    padding: 40px 180px;
  }
  @media (max-width: 1280px) {
    padding: 30px 150px;
  }
  @media (max-width: 1080px) {
    padding: 30px 120px;
  }
  @media (max-width: 980px) {
    padding: 20px 100px;
  }
  @media (max-width: 768px) {
    padding: 20px 80px;
  }
  @media (max-width: 640px) {
    padding: 15px 60px;
  }
  @media (max-width: 540px) {
    padding: 15px 40px;
  }
  @media (max-width: 480px) {
    padding: 10px 30px;
  }
  @media (max-width: 360px) {
    padding: 10px 20px;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  background-color: #000;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  padding: 50px;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1440px) {
    padding: 40px;
  }
  @media (max-width: 1280px) {
    padding: 35px;
  }
  @media (max-width: 1080px) {
    padding: 30px;
  }
  @media (max-width: 980px) {
    padding: 25px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
    gap:20px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  color: #fff;
  background: #000;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
  gap: 50px;

  @media (max-width: 1440px) {
    padding-left: 40px;
  }
  @media (max-width: 1280px) {
    padding-left: 30px;
    gap: 40px;
  }
  @media (max-width: 1080px) {
    padding-left: 20px;
    gap: 35px;
  }
  @media (max-width: 980px) {
    padding-left: 15px;
    gap: 30px;
  }
  @media (max-width: 768px) {
    gap: 25px;
    align-items:center;
    
  }
  @media (max-width: 640px) {
    padding-left: 5px;
  }
`;

const LeftTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.3rem;

  @media (max-width: 1440px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1280px) {
    font-size: 1.1rem;
  }
  @media (max-width: 1080px) {
    font-size: 1rem;
  }
  @media (max-width: 980px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const AppleImage = styled.img`
  width: 40px;

  @media (max-width: 1440px) {
    width: 35px;
  }
  @media (max-width: 1280px) {
    width: 30px;
  }
  @media (max-width: 1080px) {
    width: 25px;
  }
  @media (max-width: 980px) {
    width: 20px;
  }
  @media (max-width: 768px) {
    width: 15px;
  }
`;

const DiscountHeading = styled.h2`
  font-size: 3.5rem;

  @media (max-width: 1440px) {
    font-size: 3rem;
  }
  @media (max-width: 1280px) {
    font-size: 2.5rem;
  }
  @media (max-width: 1080px) {
    font-size: 2rem;
  }
  @media (max-width: 980px) {
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ShopNowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.4rem;

  @media (max-width: 1440px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1280px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1080px) {
    font-size: 1.1rem;
  }
  @media (max-width: 980px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ShopNowLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ShopNowText = styled.p`
  text-decoration: underline;
`;

const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 1440px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 1280px) {
    width: 16px;
    height: 16px;
  }
  @media (max-width: 1080px) {
    width: 14px;
    height: 14px;
  }
  @media (max-width: 980px) {
    width: 12px;
    height: 12px;
  }
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

const RightContainer = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
`;

const HomeImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

  
export const Home = () => {
  return (
    <>
      <HomeSection id="home">
        <HomeContainer>
          <LeftContainer>
            <LeftTop>
              <AppleImage src={appleImg} alt="Apple" />
              <p>iPhone 14 Series</p>
            </LeftTop>
            <DiscountHeading>Up to 10% off Voucher</DiscountHeading>
            <ShopNowContainer>
              <ShopNowLink to="/product">
                <ShopNowText>Shop Now</ShopNowText>
                <ArrowIcon className="arrow" src={Arrowicon} alt="Arrow" />
              </ShopNowLink>
            </ShopNowContainer>
          </LeftContainer>
          <RightContainer>
            <HomeImage src={home} alt="Home" />
          </RightContainer>
        </HomeContainer>
      </HomeSection>
      <Category />
      <Productlist />
      <Details />
    </>
  );
};


// import React from 'react'
// import { Category } from './Category'
// import { Productlist } from './Productlist'
// import appleImg from '../assets/images/Apple.png'
// import home from '../assets/images/home.png'
// import { Details } from './Details'
// import Arrowicon from '../assets/images/Vector.png'
// import { Link } from 'react-router-dom';


// export const Home = () => {
//   return (
//     <>
//      <section id="home">
//             <div className="home">
//                 <div className="left">
//                     <div className="l-1">
//                         <img src={appleImg} alt='no_img'/>
//                         <p>iPhone 14 Series</p>
//                     </div>
//                     <h2>Up tp 10%<br/> off Voucher</h2>
//                     <div className="l-3">
//                         <Link to="/product">
//                             <p>Shop Now</p>
//                             <img className='arrow' src={Arrowicon} alt='No-img'/> 
//                         </Link>                  
//                      </div>
//                 </div>
            
//                 <div className="right">
//                     <img src={home}  alt='no_img'/>
//                 </div>
//             </div>
//     </section> 
//     <Category />
//     <Productlist />
//     <Details />
//     </>
//   )
// }
