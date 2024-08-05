import React from 'react';
import styled from 'styled-components';

const sizes = {
  desktop: '1200px',
  tablet: '768px',
  mobile: '480px',
};

const NavContainer = styled.div`
  background-color: #444;
  color: #fff;
  width: 100%;
  display: flex;
  padding: 10px 150px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${sizes.desktop}) {
    padding: 10px 100px;
  }

  @media (max-width: ${sizes.tablet}) {
    padding: 10px 50px;
  }

  @media (max-width: 900px) {
    display:none;
  }

  @media (max-width: ${sizes.mobile}) {
    padding: 10px 20px;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

const NavText = styled.p`
  font-size: 14px;

  @media (max-width: ${sizes.tablet}) {
    font-size: 12px;
  }

  @media (max-width: ${sizes.mobile}) {
    font-size: 10px;
  }
`;

const NavSpan = styled.span`
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: ${sizes.tablet}) {
    font-size: 14px;
  }

  @media (max-width: ${sizes.mobile}) {
    font-size: 12px;
  }
`;

const NavSelect = styled.select`
  background: #444;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #fff;

  @media (max-width: ${sizes.tablet}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${sizes.mobile}) {
    font-size: 0.8rem;
  }
`;

export const Header = () => {
  return (
    <NavContainer>
      <NavText>
        Summer Sale For All Swim Suits And Free Express Delivery- OFF 50%! <NavSpan>Shop Now</NavSpan>
      </NavText>
      <NavSelect>
        <option>English</option>
        <option>Tamil</option>
      </NavSelect>
    </NavContainer>
  );
};


// import React from 'react'


// export const Header = () => {
//   return (
//     <>
//     <div className="nav-1">
//         <p>Summer Sale For All Swim Suits And Free Express Delivery- OFF 50%! <span>Shop Now</span> </p>
//         <select>
//             <option>English</option>
//             <option>Tamil</option>
//         </select>
//     </div>
//     </>
//   )
// }
