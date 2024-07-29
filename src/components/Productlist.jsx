import React, { useEffect, useState } from 'react';
import Like from '../assets/images/Wishlist.svg'
import View from '../assets/images/Quick View.svg'
import productsData from '../Allproducts.json'
import { NextPage } from './NextPage'
import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlist, addToCart } from '../actions';
import fStar from '../assets/images/f-star.png'
import eStar from '../assets/images/e-star.png'
import hStar from '../assets/images/h-star.png'



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
              <img key={`full-${i}`} src={fStar} alt="Full star" />
            ))}
            {halfStar && <img src={hStar} alt="Half star" />}
            {[...Array(emptyStars)].map((_, i) => (
              <img key={`empty-${i}`} src={eStar} alt="Empty star" />
            ))}
          </>
        );
      };
  return (
    <>
        <section id="products-1">
            <div className="products-1">
            {products.filter(product => product.id <= 8).map(product => (
                <div key={product.id} className="product-1">
                    <div className="product-1-top">
                        {product.new && <span>NEW</span>}
                    
                        <img className="main" src={require(`../assets/images/${product.img}`)} alt={product.name} />
                        <div className="icons">
                            <img 
                              className={`like ${wishlist.includes(product.id) ? 'liked' : ''}`} 
                              src={Like} alt="Wishlist" 
                              onClick={() => handleWishlistToggle(product.id)}
                            />
                            <img className="view" src={View} alt="Quick View" />
                        </div>
                        <div className="btn" onClick={handleAddToCart} >
                            <p>Add To Cart</p>
                        </div>
                    </div>
                    <div className="product-1-btm">
                        <p>{product.name}</p>
                        <div className="cost">
                            <span>${product.cost}</span>
                            <div className="rating">
                                {renderStars(product.rating)}  
                            </div>
                            <p>({product.buyed})</p>
                        </div>
                        {product.color && (
                            <div className="color">
                                <div className={product.color1}></div>
                                <div className={product.color2}></div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            </div>
            <NextPage />
        </section>
    </>
  )
}
