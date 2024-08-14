import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Send from '../assets/images/icon-send.svg';
import Qr from '../assets/images/Qr Code.png';
import GooglePlay from '../assets/images/GooglePlay.png';
import ApplePlay from '../assets/images/AppStore.png';
import Facebook from '../assets/images/Icon-Facebook.svg';
import Twitter from '../assets/images/Icon-Twitter.svg';
import Instagram from '../assets/images/icon-instagram.svg';
import Linkedin from '../assets/images/Icon-Linkedin.svg';

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

const FooterSection = styled.section`
  background-color: #000;
  color: #FAFAFA;
  padding: 40px 200px;
  font-size: 1rem;
  width: 100%;

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

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  gap:20px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${sizes.tabletMd}) {
    flex-direction: column;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding: 0;

  @media (max-width: ${sizes.tabletMd}) {
    flex-direction: column;
  }
`;

const FooterSubColumn = styled.div`
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'auto')};
  @media (max-width: ${sizes.tabletMd}) {
    min-width: 100%;
    margin-bottom: 20px;
  }
`;

const FooterHeading = styled.h5`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FooterSubHeading = styled.h6`
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

const FooterParagraph = styled.p`
  font-size: ${(props) => (props.small ? '0.8rem' : '1rem')};
  margin-bottom: 15px;
`;

const EmailInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  border-radius: 4px;
  padding: 5px 10px;
  border: 1.5px solid #FAFAFA;
  max-width:210px;
`;

const EmailInput = styled.input`
  border: none;
  border-radius: 5px;
  width: 150px;
  background: #000;
  outline: none;
  color: #fff;
  margin-right: 10px;
  font-size: 1rem;
`;

const SendIcon = styled.img`
  cursor: pointer;
  width: 30px;
  padding: 3px;
  height: 30px;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #fafafa;
  text-decoration: none;
  margin-bottom: 15px;
  text-align: left;
  font-size: 500;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const DownloadAppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const QRWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const QRImage = styled.img`
  max-width: 100%;
  align-items: center;
  display: flex;
`;

const StoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
`;

const StoreImage = styled.img`
  width: 120px;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
`;

const SocialIcon = styled.img`
  width: 30px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CopyrightSection = styled.section`
  width: 100%;
  background: #000;
`;

const CopyrightWrapper = styled.div`
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #444;
`;

const CopyrightText = styled.p`
  margin: 0;
  color: #aaa;
  font-size: 0.8rem;
`;

export const Footer = () => {
  return (
    <>
      <FooterSection id="footer">
        <FooterTop>
          <FooterColumn>
            <FooterSubColumn minWidth="200px">
              <FooterHeading>Exclusive</FooterHeading>
              <FooterSubHeading>Subscribe</FooterSubHeading>
              <FooterParagraph>Get 10% off your first order</FooterParagraph>
              <EmailInputWrapper>
                <EmailInput type="email" placeholder="Enter your email" />
                <SendIcon src={Send} alt="Send Icon" />
              </EmailInputWrapper>
            </FooterSubColumn>
            <FooterSubColumn minWidth="100px">
              <FooterSubHeading>Support</FooterSubHeading>
              <FooterParagraph>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</FooterParagraph>
              <FooterParagraph>exclusive@gmail.com</FooterParagraph>
              <FooterParagraph>+88015-88888-99999</FooterParagraph>
            </FooterSubColumn>
          </FooterColumn>
          <FooterColumn>
            <FooterSubColumn>
              <FooterSubHeading>Account</FooterSubHeading>
              <FooterLink to="/">My Account</FooterLink>
              <FooterLink to="/">Login/Register</FooterLink>
              <FooterLink to="/">Cart</FooterLink>
              <FooterLink to="/">Wishlist</FooterLink>
              <FooterLink to="/product">Shop</FooterLink>
            </FooterSubColumn>
            <FooterSubColumn>
              <FooterSubHeading>Quick Link</FooterSubHeading>
              <FooterLink to="/">Privacy Policy</FooterLink>
              <FooterLink to="/">Terms Of Use</FooterLink>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Contact</FooterLink>
            </FooterSubColumn>
            <FooterSubColumn>
              <FooterSubHeading>Download App</FooterSubHeading>
              <DownloadAppWrapper>
                <FooterParagraph small>Save $3 with App New User Only</FooterParagraph>
                <QRWrapper>
                  <QRImage src={Qr} alt="QR Code" />
                  <StoreWrapper>
                    <StoreImage src={GooglePlay} alt="Google Play" />
                    <StoreImage src={ApplePlay} alt="Apple Store" />
                  </StoreWrapper>
                </QRWrapper>
                <SocialIconsWrapper>
                  <SocialIcon src={Facebook} alt="Facebook" />
                  <SocialIcon src={Twitter} alt="Twitter" />
                  <SocialIcon src={Instagram} alt="Instagram" />
                  <SocialIcon src={Linkedin} alt="LinkedIn" />
                </SocialIconsWrapper>
              </DownloadAppWrapper>
            </FooterSubColumn>
          </FooterColumn>
        </FooterTop>
      </FooterSection>
      <CopyrightSection id="copyrights">
        <CopyrightWrapper>
          <CopyrightText>&copy; Copyright Rimel 2022. All rights reserved</CopyrightText>
        </CopyrightWrapper>
      </CopyrightSection>
    </>
  );
};



