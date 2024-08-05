import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProdBtm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 1440px) {
    margin-top: 28px;
  }
  @media (max-width: 1280px) {
    margin-top: 26px;
  }
  @media (max-width: 1080px) {
    margin-top: 24px;
  }
  @media (max-width: 980px) {
    margin-top: 22px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  @media (max-width: 640px) {
    margin-top: 18px;
  }
  @media (max-width: 540px) {
    margin-top: 16px;
  }
  @media (max-width: 480px) {
    margin-top: 14px;
  }
  @media (max-width: 360px) {
    margin-top: 12px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FAFAFA;
  background: #DB4444;
  font-size: 1.5rem;
  border-radius: 4px;
  padding: 20px 50px;

  @media (max-width: 1440px) {
    font-size: 1.4rem;
    padding: 18px 45px;
  }
  @media (max-width: 1280px) {
    font-size: 1.3rem;
    padding: 16px 40px;
  }
  @media (max-width: 1080px) {
    font-size: 1.2rem;
    padding: 14px 35px;
  }
  @media (max-width: 980px) {
    font-size: 1.1rem;
    padding: 12px 30px;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 25px;
  }
  @media (max-width: 640px) {
    font-size: 0.9rem;
    padding: 8px 20px;
  }
  @media (max-width: 540px) {
    font-size: 0.8rem;
    padding: 6px 15px;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 4px 10px;
  }
  @media (max-width: 360px) {
    font-size: 0.6rem;
    padding: 2px 5px;
  }
`;
export const NextPage = () => {
  return (
    <ProdBtm>
      <StyledLink to="/product">View All Products</StyledLink>
    </ProdBtm>
  );
};


// import React from 'react';
// import { Link } from 'react-router-dom';

// export const NextPage = () => {

//   return (
//     <>
//         <div className="prod-btm">
//             <Link to="/product">View All Products</Link>
//         </div>
//     </>
//   )
// }
