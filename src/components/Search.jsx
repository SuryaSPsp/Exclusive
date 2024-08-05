import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchTerm, setFilteredProducts } from '../actions';
import products from '../Allproducts.json';
import Likeicon from '../assets/images/likeicon.svg';
import searchicon from '../assets/images/search.svg';
import carticon from '../assets/images/Cart1.svg';
import styled from 'styled-components';

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-direction: row;

  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 640px) {
    gap: 15px;
  }
  @media (max-width: 540px) {
    gap: 10px;
  }
  @media (max-width: 480px) {
    gap: 5px;
  }
  @media (max-width: 360px) {
    gap: 2px;
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
    outline: none;
    padding: 10px;
    font-size: 1rem;
    background:#ccc;
    max-width:100%;

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 0.9rem;
    }
    @media (max-width: 640px) {
      padding: 6px;
      font-size: 0.8rem;
    }
    @media (max-width: 540px) {
      padding: 5px;
      font-size: 0.7rem;
      width:100px
    }
    @media (max-width: 480px) {
      padding: 4px;
      font-size: 0.6rem;
    }
    @media (max-width: 360px) {
      padding: 2px;
      font-size: 0.5rem;
    }
  }

  img {
    margin-left: 10px;
    cursor: pointer;
    max-width: 100%;

    @media (max-width: 768px) {
      margin-left: 8px;
    }
    @media (max-width: 640px) {
      margin-left: 6px;
    }
    @media (max-width: 540px) {
      margin-left: 5px;
      max-width:70%;
    }
    @media (max-width: 480px) {
      margin-left: 4px;
    }
    @media (max-width: 360px) {
      margin-left: 2px;
    }
  }
`;

const CountContainer = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  align-items: center;
  @media (max-width: 768px) {
      padding:5px;
    }
  
  img {
    max-width: 100%;
    margin-left: 15px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-left: 10px;
      max-width: 70%;
    }
    @media (max-width: 640px) {
      margin-left: 8px;
    }
    @media (max-width: 540px) {
      margin-left: 6px;
    }
    @media (max-width: 480px) {
      margin-left: 4px;
    }
    @media (max-width: 360px) {
      margin-left: 2px;
    }
  }

  span {
    position: absolute;
    z-index: 1;
    padding: 3px;
    height: 20px;
    width: 20px;
    font-size: 14px;
    text-align: center;
    align-items: center;
    background-color: #ccc;
    border-radius: 100%;
    top: 0;
    right: 0;

    @media (max-width: 1440px) {
      height: 18px;
      width: 18px;
      font-size: 13px;
    }
    @media (max-width: 1280px) {
      height: 16px;
      width: 16px;
      font-size: 12px;
    }
    @media (max-width: 1080px) {
      height: 14px;
      width: 14px;
      font-size: 11px;
    }
    
  }
`;

export const Search = () => {
  const wishlistCount = useSelector((state) => state.wishlist.length);
  const cartCount = useSelector((state) => state.cartCount);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));

    const filtered = (term === ''
      ? products
      : products.filter(product =>
          product.name.toLowerCase().includes(term.toLowerCase())
        ));

    console.log('Search term:', term);
    console.log('Filtered products:', filtered);

    dispatch(setFilteredProducts(filtered));

    if (term !== '') {
      navigate('/product');
    }
  };

  return (
    <RightContainer>
      <SearchInput>
        <input type="search" placeholder="What are you looking for?" onChange={handleSearch} />
        <img src={searchicon} alt='search' />
      </SearchInput>
      <CountContainer>
        <img src={Likeicon} alt='wishlist' />
        <span>{wishlistCount}</span>
      </CountContainer>
      <CountContainer>
        <img src={carticon} alt='cart' />
        <span>{cartCount}</span>
      </CountContainer>
    </RightContainer>
  );
};
