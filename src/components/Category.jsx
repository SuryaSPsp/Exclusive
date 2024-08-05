import React from 'react';
import styled from 'styled-components';
import phone from '../assets/images/Category-CellPhone.svg';
import computer from '../assets/images/Category-Computer.svg';
import watch from '../assets/images/Category-SmartWatch.svg';
import headphone from '../assets/images/Category-Headphone.svg';
import gaming from '../assets/images/Category-Gamepad.svg';
import photo from '../assets/images/Category-Camera.svg';

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

const CategorySection = styled.section`
  padding: 40px 200px;
  background-color: #fff;
  text-align: left;
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
    padding: 40px 60px;
  }

  @media (max-width: ${sizes.tabletMd}) {
    padding: 40px 40px;
  }

  @media (max-width: ${sizes.tabletSm}) {
    padding: 30px 20px;
  }

  @media (max-width: ${sizes.mobileLg}) {
    padding: 30px 15px;
  }

  @media (max-width: ${sizes.mobileMd}) {
    padding: 20px 10px;
  }

  @media (max-width: ${sizes.mobileSm}) {
    padding: 15px 5px;
  }

`;

const CategoryContainer = styled.div`
  width: 100%;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: ${sizes.tabletMd}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CategoryIndicator = styled.div`
  width: 20px;
  height: 40px;
  background: #DB4444;
  border-radius: 4px;
  margin-right: 10px;

   @media (max-width: ${sizes.tabletMd}) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const CategoryTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #DB4444;
`;

const CategoryMainTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 50px;
  color: #000;

  @media (max-width: ${sizes.tabletMd}) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media (max-width: ${sizes.mobileMd}) {
    font-size: 1.5rem;
  }
`;

const CategoryItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 10px;
  width: 100%;

  @media (max-width: ${sizes.tabletMd}) {
    gap: 20px;
  }
  
  @media (max-width: ${sizes.mobileMd}) {
    gap: 15px;
  }
`;

const CategoryItem = styled.div`
  min-width: 170px;
  padding: 40px;
  border: 1px solid #0000004D;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${sizes.tabletMd}) {
    padding:20px;
     min-width: 150px;
  }

  @media (max-width: ${sizes.mobileMd}) {
    padding: 10px;
    min-width: 130px;
  }


`;

const CategoryImage = styled.img`
  max-width: 100%;
  margin-bottom: 10px;

  @media (max-width: ${sizes.tabletMd}) {
    max-width: 80%;
  }
`;

const CategoryItemText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;

  @media (max-width: ${sizes.tabletMd}) {
    font-size: 14px;
  }

  @media (max-width: ${sizes.mobileMd}) {
    
  }
`;

export const Category = () => {
  return (
    <CategorySection id="category">
      <CategoryContainer className="cate">
        <CategoryHeader className="cate-1">
          <CategoryIndicator className="cate-11"></CategoryIndicator>
          <CategoryTitle>Categories</CategoryTitle>
        </CategoryHeader>
        <CategoryMainTitle>Browse By Category</CategoryMainTitle>
        <CategoryItems className="cate-items">
          <CategoryItem className="cate-item">
            <CategoryImage src={phone} alt="Phones" />
            <CategoryItemText>Phones</CategoryItemText>
          </CategoryItem>
          <CategoryItem className="cate-item">
            <CategoryImage src={computer} alt="Computers" />
            <CategoryItemText>Computers</CategoryItemText>
          </CategoryItem>
          <CategoryItem className="cate-item">
            <CategoryImage src={watch} alt="SmartWatch" />
            <CategoryItemText>SmartWatch</CategoryItemText>
          </CategoryItem>
          <CategoryItem className="cate-item">
            <CategoryImage src={headphone} alt="HeadPhones" />
            <CategoryItemText>HeadPhones</CategoryItemText>
          </CategoryItem>
          <CategoryItem className="cate-item">
            <CategoryImage src={gaming} alt="Gaming" />
            <CategoryItemText>Gaming</CategoryItemText>
          </CategoryItem>
          <CategoryItem className="cate-item">
            <CategoryImage src={photo} alt="Camera" />
            <CategoryItemText>Camera</CategoryItemText>
          </CategoryItem>
        </CategoryItems>
      </CategoryContainer>
    </CategorySection>
  );
};



// import React from 'react'
// import phone from '../assets/images/Category-CellPhone.svg'
// import computer from '../assets/images/Category-Computer.svg'
// import watch from '../assets/images/Category-SmartWatch.svg'
// import headphone from '../assets/images/Category-Headphone.svg'
// import gaming from '../assets/images/Category-Gamepad.svg'
// import photo from '../assets/images/Category-Camera.svg'

// export const Category = () => {
//   return (
//     <>
//         <section id="category">
//             <div className ="cate">
//                 <div className  ="cate-1">
//                     <div className  ="cate-11"></div>
//                     <p>Categories</p>
//                 </div>
//                 <h3>Browse By Category</h3>
//                 <div className ="cate-items">
//                     <div className ="cate-item">
//                         <img src={phone} alt='no_img'/>
//                         <p>Phones</p>
//                     </div>
//                     <div className ="cate-item">
//                         <img src={computer} alt='no_img'/>
//                         <p>Computers</p>
//                     </div>
//                     <div className ="cate-item">
//                         <img src={watch} alt='no_img'/>
//                         <p>SmartWatch</p>
//                     </div>
//                     <div className ="cate-item">
//                         <img src={headphone} alt='no_img'/>
//                         <p>HeadPhones</p>
//                     </div>
//                     <div className ="cate-item">
//                         <img src={gaming} alt='no_img'/>
//                         <p>Gaming</p>
//                     </div>
//                     <div className ="cate-item">
//                         <img src={photo} alt='no_img'/>
//                         <p>Camera</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }
