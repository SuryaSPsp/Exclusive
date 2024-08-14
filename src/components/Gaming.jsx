import React from 'react';
import styled from 'styled-components';
import game from '../assets/images/game.png';
import fStar from '../assets/images/f-star.png';
import eStar from '../assets/images/e-star.png';
import delivery from '../assets/images/icon-delivery1.png';
import returnicon from '../assets/images/Icon-return.svg';
import { GamingProducts } from './GamingProducts';


const sizes = {
    desktopLg: '1440px',
    desktopMd: '1280px',
    desktopSm: '1080px',
    tabletLg: '980px',
    tabletMd: '768px',
    tabletSm: '640px',
    mobileLg: '540px',
    mobileMd: '480px',
    mobileSm: '360px',
  };

const Section = styled.section`
  padding: 40px 200px;
  font-size: 14px;

  @media (max-width: ${sizes.desktopLg}) {
    padding: 40px 150px;
  }

  @media (max-width: ${sizes.desktopMd}) {
    padding: 40px 100px;
  }

  @media (max-width: ${sizes.desktopSm}) {
    padding: 40px 80px;
  }

  @media (max-width: ${sizes.tabletLg}) {
    padding: 30px 60px;
  }

  @media (max-width: ${sizes.tabletMd}) {
    padding: 20px 40px;
  }

  @media (max-width: ${sizes.tabletSm}) {
    padding: 20px 20px;
  }

  @media (max-width: ${sizes.mobileLg}) {
    padding: 15px 15px;
  }

  @media (max-width: ${sizes.mobileMd}) {
    padding: 10px 10px;
  }

  @media (max-width: ${sizes.mobileSm}) {
    padding: 10px 5px;
  }
`;

const GamingContainer = styled.div`
  width: 100%;
`;

const Bar = styled.div`
  p {
    color: #555;
    font-size: 1rem;
    margin-bottom: 20px;

    span {
      color: #000;
      font-weight: bold;
    }
  }
`;

const Gamepad = styled.div`
  display: flex;
  margin-top: 70px;
  width: 100%;
  align-items: stretch;
  flex-wrap:wrap;

  @media (max-width: ${sizes.tabletMd}) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border-radius: 4px;

  img {
    max-width: 100%;
  }

  @media (max-width: ${sizes.tabletMd}) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 70px;

  @media (max-width: 1000px) {
    padding:0px;
    padding-left:20px;
  }

  

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: 400;
  }

  .rate {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .star {
    display:flex;
    flex-direction:row;
      img {
        width: 20px;
        margin-right: 5px;
      }
    }

    p {
      color: #666;
      font-size: 0.9rem;
      margin: 0 10px;
    }

    span {
      color: #00ff66;
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.3;
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  hr {
    margin-bottom: 20px;
  }

  .colr {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    h4 {
      margin-right: 10px;
      font-size: 1.5rem;
      font-weight: 200;
    }

    .colr-1,
    .colr-2 {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        border: 2px solid #000000;
      }

      &.colr-1 {
        background: #a0bce0;
      }

      &.colr-2 {
        background: #e07575;
      }
    }
  }

  .features {
    width: 100%;
    border: 1px solid #00000080;

    hr {
      margin: 0;
    }

    .fe-1,
    .fe-2 {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px;

      .lt {
        img {
          width: 40px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .rt {
        display: flex;
        flex-direction: column;
        padding: 5px;

        h5 {
          margin-bottom: 5px;
          font-size: 1.1rem;
        }

        p {
          font-size: 0.9rem;
          color: #555;
          margin: 0;
        }
      }
    }
  }

  @media (max-width: ${sizes.tabletMd}) {
    width: 100%;
    padding: 20px;
  }
`;

export const Gaming = () => {
  return (
    <Section id="gaming">
      <GamingContainer className="gaming">
        <Bar className="bar">
          <p>Home / Gaming / <span>Havic HV G-92 Gamepad</span></p>
        </Bar>
        <Gamepad className="gamepad">
          <Left className="left">
            <img src={game} alt="Gamepad" />
          </Left>
          <Right className="right">
            <h2>Havic HV G-92 Gamepad</h2>
            <div className="rate">
              <div className="star">
                <img src={fStar} alt="no_img" />
                <img src={fStar} alt="no_img" />
                <img src={fStar} alt="no_img" />
                <img src={fStar} alt="no_img" />
                <img src={eStar} alt="no_img" />
              </div>
              <p>(150 Reviews)</p>
              <p>|</p>
              <span> In Stock</span>
            </div>
            <h3>$192.00</h3>
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air
              channel adhesive for easy bubble free install & mess
              free removal Pressure sensitive.
            </p>
            <hr />
            <div className="colr">
              <h4>Colours:</h4>
              <div className="colr-1"></div>
              <div className="colr-2"></div>
            </div>
            <div className="features">
              <div className="fe-1">
                <div className="lt">
                  <img src={delivery} alt="Delivery" />
                </div>
                <div className="rt">
                  <h5>Free Delivery</h5>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <hr />
              <div className="fe-2">
                <div className="lt">
                  <img src={returnicon} alt="return" />
                </div>
                <div className="rt">
                  <h5>Return Delivery</h5>
                  <p>Free 30 Days Delivery Returns.<span> Details</span></p>
                </div>
              </div>
            </div>
          </Right>
        </Gamepad>
      </GamingContainer>
      <GamingProducts />
    </Section>
  );
};


