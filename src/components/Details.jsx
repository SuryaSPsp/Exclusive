import React from 'react';
import styled from 'styled-components';
import delivery from '../assets/images/icon-delivery.png';
import service from '../assets/images/Icon-Customer service.png';
import secure from '../assets/images/Icon-secure.png';

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

const DetailsSection = styled.section`
  padding: 50px 200px;
  text-align: center;
  width: 100%;

  @media (max-width: ${sizes.desktopLg}) {
    padding: 50px 150px;
  }

  @media (max-width: ${sizes.desktopMd}) {
    padding: 50px 100px;
  }

  @media (max-width: ${sizes.desktopSm}) {
    padding: 50px 80px;
  }

  @media (max-width: ${sizes.tabletLg}) {
    padding: 40px 60px;
  }

  @media (max-width: ${sizes.tabletMd}) {
    padding: 30px 40px;
  }

  @media (max-width: ${sizes.tabletSm}) {
    padding: 20px 20px;
  }

  @media (max-width: ${sizes.mobileLg}) {
    padding: 20px 15px;
  }

  @media (max-width: ${sizes.mobileMd}) {
    padding: 15px 10px;
  }

  @media (max-width: ${sizes.mobileSm}) {
    padding: 10px 5px;
  }
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;

   @media (max-width: ${sizes.tabletLg}) {
    justify-content: center;
  }
`;

const DetailCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(33.33% - 20px);
  transition: transform 0.3s ease;
  gap: 10px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: ${sizes.tabletMd}) {
    width: calc(50% - 20px);
  }

  @media (max-width: ${sizes.mobileMd}) {
    width: calc(100% - 20px);
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 20px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  border-radius: 100%;
  padding: 10px;
  width: fit-content;
`;

const DetailIcon = styled.img`
  width: 80px;
  background-color: #000;
  border-radius: 100%;
  padding: 5px;
`;

const DetailTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 10px;
`;

const DetailText = styled.p`
  font-size: 1rem;
  color: #000;
  margin: 0;
`;

export const Details = () => {
  return (
    <DetailsSection id="details">
      <DetailsContainer>
        <DetailCard>
          <ImageContainer>
            <DetailIcon src={delivery} alt="Delivery icon" />
          </ImageContainer>
          <DetailTitle>Free and Fast Delivery</DetailTitle>
          <DetailText>Free delivery for all orders over $140</DetailText>
        </DetailCard>
        <DetailCard>
          <ImageContainer>
            <DetailIcon src={service} alt="Customer service icon" />
          </ImageContainer>
          <DetailTitle>24/7 Customer Service</DetailTitle>
          <DetailText>Friendly 24/7 customer support</DetailText>
        </DetailCard>
        <DetailCard>
          <ImageContainer>
            <DetailIcon src={secure} alt="Secure icon" />
          </ImageContainer>
          <DetailTitle>Money Back Guarantee</DetailTitle>
          <DetailText>We return money within 30 days</DetailText>
        </DetailCard>
      </DetailsContainer>
    </DetailsSection>
  );
};


