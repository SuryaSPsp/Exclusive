import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlist, addToCart } from '../actions';
import Like from '../assets/images/Wishlist.svg';
import View from '../assets/images/Quick View.svg';
import productsData from '../Allproducts.json';
import fStar from '../assets/images/f-star.png';
import eStar from '../assets/images/e-star.png';
import hStar from '../assets/images/h-star.png';
import styled from 'styled-components';
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
  
  const Container = styled.div`
    width: 100%;
    margin-top: 100px;
  
    @media (max-width: ${sizes.tabletMd}) {
      margin-top: 50px;
    }
  `;
  
  const Head = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  
    .red {
      width: 20px;
      height: 40px;
      background: #db4444;
      border-radius: 4px;
      margin-right: 20px;
    }
  
    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
      color: #db4444;
  
      @media (max-width: ${sizes.mobileMd}) {
        font-size: 1.2rem;
      }
    }
  `;
  
  const Items = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
    justify-content: center;
    padding-bottom: 50px;
    height: auto;
  
    @media (max-width: ${sizes.tabletMd}) {
      gap: 20px;
    }
  `;
  
  const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
  
    &:hover .btn {
      display: block;
    }
  
    @media (max-width: ${sizes.mobileLg}) {
      max-width: 150px;
    }
  `;
  
  const ItemTop = styled.div`
    position: relative;
    text-align: center;
    padding: 40px;
    display:flex;
    justify-content:center;
    align-items: center;
    background: #f5f5f5;
    border-radius: 4px;
    width: 100%;
    height: 200px;
  
    .main {
      max-width: 100%;
    }
  
    .icons {
      display: flex;
      position: absolute;
      z-index: 1;
      top: 10px;
      right: 20px;
      flex-direction: column;
      gap: 15px;
  
      .like,
      .view {
        padding: 5px;
        background-color: #fff;
        border-radius: 100%;
        cursor: pointer;
        transition: 0.3s ease;

         @media (max-width: ${sizes.tabletMd}) {
            height:30px;
         }

         @media (max-width: ${sizes.mobileLg}) {
            height:25px;
         }
      }
  
      .view:hover {
        background-color: #00f;
      }
    }
  
    span {
      position: absolute;
      z-index: 1;
      top: 10px;
      padding: 5px;
      left: 10px;
      border-radius: 4px;
      color: #fafafa;
      background: #db4444;
    }
  
    .like.liked {
      background-color: #f00;
    }
  
    @media (max-width: ${sizes.tabletMd}) {
      padding: 20px;
      height: 150px;
    }
  `;
  
  const Btn = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #000;
    color: #ffffff;
    left: 0;
    font-size: 1.3rem;
    font-weight: 500;
    align-items: center;
    padding: 10px 0;
    display: none;
    cursor: pointer;
    transition: 0.3s ease;
  
    @media (max-width: ${sizes.mobileMd}) {
      font-size: 1rem;
    }
  `;
  
  const ItemBtm = styled.div`
    padding-top: 10px;
    text-align: left;
    position: relative;
    height: 100px;
  
    p {
      font-size: 1.1rem;
      font-weight: bold;
      color: #333;
      margin: 10px 0;
  
      @media (max-width: ${sizes.mobileMd}) {
        font-size: 1rem;
      }
    }
  
    .cost {
      display: flex;
      flex-direction: column;
      gap: 10px;
      position:absolute;
      bottom:0;
  
      span {
        font-size: 18px;
        font-weight: 600;
        color: #db4444;
  
        @media (max-width: ${sizes.mobileMd}) {
          font-size: 16px;
        }
      }
  
      .disc {
        color: #666;
        font-weight: 400;
        margin-left: 10px;
        text-decoration: line-through;
  
        @media (max-width: ${sizes.mobileMd}) {
          font-size: 14px;
        }
      }
  
      .rating {
        display: flex;
  
        img {
          width: 16px;
          margin-right: 2px;
  
          @media (max-width: ${sizes.mobileMd}) {
            width: 14px;
          }
        }
      }
  
      p {
        margin: 0;
        font-size: 14px;
        margin-left: 10px;
        color: #777;
  
        @media (max-width: ${sizes.mobileMd}) {
          font-size: 12px;
        }
      }
    }
  
    .color {
      display: flex;
  
      div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 10px;
  
        @media (max-width: ${sizes.mobileMd}) {
          width: 15px;
          height: 15px;
        }
      }
    }
  `;
  
export const GamingProducts = () => {
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
    <Container>
      <Head>
        <div className="red"></div>
        <h3>Related Item</h3>
      </Head>
      <Items>
        {products.filter(product => product.id > 8).map(product => (
          <Item key={product.id}>
            <ItemTop>
              {product.new && <span>NEW</span>}
              {product.off && <span className="off">-{product.offer}%</span>}
              <img className="main" src={require(`../assets/images/${product.img}`)} alt={product.name} />
              <div className="icons">
                <img 
                  className={`like ${wishlist.includes(product.id) ? 'liked' : ''}`} 
                  src={Like} alt="Wishlist" 
                  onClick={() => handleWishlistToggle(product.id)}
                />
                <img className="view" src={View} alt="Quick View" />
              </div>
              <Btn onClick={handleAddToCart}>
                <p>Add To Cart</p>
              </Btn>
            </ItemTop>
            <ItemBtm>
              <p>{product.name}</p>
              <div className="cost">
                <div>
                  <span>${product.cost}</span>
                  {product.discount && <span className="disc">${product.discost}</span>}
                </div>
                <div className="rating">
                  {renderStars(product.rating)}
                  <p>({product.buyed})</p>
                </div>
              </div>
              {product.color && (
                <div className="color">
                  <div className={product.color1}></div>
                  <div className={product.color2}></div>
                </div>
              )}
            </ItemBtm>
          </Item>
        ))}
      </Items>
    </Container>
  );
};




