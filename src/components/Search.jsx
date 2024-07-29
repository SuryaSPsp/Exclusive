import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchTerm, setFilteredProducts } from '../actions';
import products from '../Allproducts.json';
import Likeicon from '../assets/images/likeicon.svg'
import searchicon from '../assets/images/search.svg'
import carticon from '../assets/images/Cart1.svg'


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
        ))

    console.log('Search term:', term);
    console.log('Filtered products:', filtered);

    dispatch(setFilteredProducts(filtered));

    if (term !== '') {
      navigate('/product');
    }
  };
  return (
    <>
        <div className="right">
            <div className="search">
                <input type="search" placeholder="What are you looking for?" onChange={handleSearch} />
                <img src={searchicon} alt='search'/>
            </div>
            <div className="count">
                <img src={Likeicon} alt='wishlist'/>
                <span>{wishlistCount}</span>
            </div>
            <div className="count">
                <img src={carticon} alt='cart'/>
                <span>{cartCount}</span>
            </div>
            
        </div>
    </>
  )
}
