import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlist, addToCart } from '../actions';
import productsData from '../Allproducts.json';
import { NextPage } from './NextPage';
import Like from '../assets/images/Wishlist.svg';
import View from '../assets/images/Quick View.svg';
import fStar from '../assets/images/f-star.png';
import eStar from '../assets/images/e-star.png';
import hStar from '../assets/images/h-star.png';

const ProductsSection = styled.section`
  padding: 40px 200px;
  background-color: #fff;
  width: 100%;

  @media (max-width: 1440px) {
    padding: 35px 180px;
  }
  @media (max-width: 1280px) {
    padding: 30px 150px;
  }
  @media (max-width: 1080px) {
    padding: 25px 120px;
  }
  @media (max-width: 980px) {
    padding: 20px 100px;
  }
  @media (max-width: 768px) {
    padding: 15px 80px;
  }
  @media (max-width: 640px) {
    padding: 10px 60px;
  }
  @media (max-width: 540px) {
    padding: 5px 40px;
  }
  @media (max-width: 480px) {
    padding: 5px 20px;
  }
  @media (max-width: 360px) {
    padding: 5px 10px;
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  justify-content: center;
  padding-bottom: 50px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 1080px) {
    gap: 30px;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 540px) {
    gap: 10px;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px; 

  &:hover .btn {
    display: block;
  }

  @media (max-width: 1080px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 540px) {
    width: 150px;
  }
`;

const ProductTop = styled.div`
  position: relative;
  text-align: center;
  padding: 40px;
  background: #f5f5f5;
  border-radius: 4px;
  width: 100%;
  height: 250px;

  @media (max-width: 1080px) {
    padding: 35px;
    height: 220px;
  }
  @media (max-width: 768px) {
    padding: 30px;
    height: 200px;
  }
  @media (max-width: 540px) {
    padding: 25px;
    height: 180px;
  }
`;

const MainImage = styled.img`
  max-width: 100%;
`;

const IconsContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 20px;
  flex-direction: column;
  gap: 15px;
`;

const NewBadge = styled.span`
  position: absolute;
  z-index: 1;
  top: 10px;
  padding: 5px;
  left: 10px;
  border-radius: 4px;
  color: #fafafa;
  background: #00ff66;
`;

const IconButton = styled.img`
  padding: 5px;
  background-color: #fff;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s ease;
  

  &.like.liked {
    background-color: #f00;
  }

  &.view:hover {
    background-color: ${props => (props.className === 'like' ? '#f00' : '#00f')};
  }

  @media (max-width: 768px) {
    height:20px;
  }
`;

const AddToCartButton = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #000;
  color: #fff;
  left: 0;
  font-size: 1.3rem;
  font-weight: 500;
  align-items: center;
  padding: 10px 0;
  display: none;
  cursor: pointer;
  transition: 0.3s ease;

  @media (max-width: 1080px) {
    font-size: 1.1rem;
    padding: 8px 0;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 6px 0;
  }
`;

const ProductBottom = styled.div`
  padding-top: 10px;
  text-align: left;
  position: relative;
  height: 100px;
`;

const ProductName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;

  @media (max-width: 1080px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  position:absolute;
  bottom:15px;

  @media (max-width: 1080px) {
    gap: 8px;
  }
  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #db4444;

  @media (max-width: 1080px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
 
`;

const StarImage = styled.img`
  width: 16px;
  margin-right: 2px;

  @media (max-width: 1080px) {
    width: 14px;
  }
  @media (max-width: 768px) {
    width: 12px;
  }
`;

const RatingCount = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;

  @media (max-width: 1080px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  position: absolute;
  z-index: 1;
  bottom: 0;

  @media (max-width: 1080px) {
    gap: 4px;
  }
  @media (max-width: 768px) {
    gap: 3px;
  }
`;

const ColorOption = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;

  &:hover {
    border: 1.5px solid #000;
  }

  &.red {
    background: #fb1314;
  }

  &.blue {
    background: #db4444;
  }

  &.yellow {
    background: #eeff61;
  }

  &.black {
    background-color: #000;
  }

  &.green {
    background: #184a48;
  }

  @media (max-width: 1080px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const Productlist = () => {
  const [products, setProducts] = useState([]);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleWishlistToggle = (productId) => {
    dispatch(toggleWishlist(productId));
  };

  const handleAddToCart = () => {
    dispatch(addToCart());
  };

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <StarImage key={`full-${i}`} src={fStar} alt="Full star" />
        ))}
        {halfStar && <StarImage src={hStar} alt="Half star" />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarImage key={`empty-${i}`} src={eStar} alt="Empty star" />
        ))}
      </>
    );
  };

  return (
    <ProductsSection id="products-1">
      <ProductsContainer className="products-1">
        {products
          .filter((product) => product.id <= 8)
          .map((product) => (
            <ProductCard key={product.id} className="product-1">
              <ProductTop className="product-1-top">
                {product.new && <NewBadge>NEW</NewBadge>}
                <MainImage
                  className="main"
                  src={require(`../assets/images/${product.img}`)}
                  alt={product.name}
                />
                <IconsContainer className="icons">
                  <IconButton
                    className={`like ${wishlist.includes(product.id) ? 'liked' : ''}`}
                    src={Like}
                    alt="Wishlist"
                    onClick={() => handleWishlistToggle(product.id)}
                  />
                  <IconButton className="view" src={View} alt="Quick View" />
                </IconsContainer>
                <AddToCartButton className="btn" onClick={handleAddToCart}>
                  <p>Add To Cart</p>
                </AddToCartButton>
              </ProductTop>
              <ProductBottom className="product-1-btm">
                <ProductName>{product.name}</ProductName>
                <CostContainer className="cost">
                  <Price>${product.cost}</Price>
                  <RatingContainer className="rating">
                    {renderStars(product.rating)}
                  </RatingContainer>
                  <RatingCount>({product.buyed})</RatingCount>
                </CostContainer>
                {product.color && (
                  <ColorOptions className="color">
                    <ColorOption className={product.color1}></ColorOption>
                    <ColorOption className={product.color2}></ColorOption>
                  </ColorOptions>
                )}
              </ProductBottom>
            </ProductCard>
          ))}
      </ProductsContainer>
      <NextPage />
    </ProductsSection>
  );
};


