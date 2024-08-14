import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Like from '../assets/images/Wishlist.svg';
import View from '../assets/images/Quick View.svg';
import fStar from '../assets/images/f-star.png';
import eStar from '../assets/images/e-star.png';
import hStar from '../assets/images/h-star.png';
import { toggleWishlist, addToCart } from '../actions';
import styled from 'styled-components';

const ProdsSection = styled.section`
  padding: 40px 200px;
  background-color: #fff;
  width: 100%;
  min-height: 47.8vh;

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

const ProdsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  justify-content: flex-start;
  padding-bottom: 50px;

  @media (max-width: 1080px) {
    gap: 30px;
  }

  @media (max-width: 1045px) {
    align-items:center;
    justify-content: center;
  }

  @media (max-width: 980px) {
    
    
  }

  @media (max-width: 768px) {
   
    
  }
  @media (max-width: 540px) {
    gap: 25px;
  }
`;

const NoMatchFound = styled.p`
  font-size: 2.3rem;
  color: #000;
  font-weight: bold;
  margin-left: 40%;
  margin-top: 5%;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-left: 30%;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-left: 25%;
  }
`;

const ProdCard = styled.div`
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

const ProdTop = styled.div`
  position: relative;
  text-align: center;
  align-items:center;
  display:flex;
  padding: 40px;
  background: #f5f5f5;
  border-radius: 4px;
  width: 100%;
  height: 250px;

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
    }

    .like.liked {
      background-color: #f00;
    }

    .view:hover {
      background-color: #00f;
    }
  }

  .btn {
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
  }

  span {
    position: absolute;
    z-index: 1;
    top: 10px;
    padding: 5px;
    left: 10px;
    border-radius: 4px;
    color: #fafafa;
    background: #00ff66;

    &.off {
      background-color: #db4444;
    }
  }

  @media (max-width: 1080px) {
    padding: 35px;
    height: 220px;
  }
  @media (max-width: 768px) {
    padding: 30px;
    height: 200px;
    .like,
    .view {
      height:30px
    }

  }
  @media (max-width: 540px) {
    padding: 25px;
    height: 180px;
    .like,
    .view {
      height:25px
    }
  }
`;

const ProdBottom = styled.div`
  padding-top: 10px;
  text-align: left;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  height: 140px;
  margin-top: 10px;
  padding: 0;

  @media (max-width: 768px){
    height:120px;
  }

  p {
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
  }

  .cost {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    position:absolute;
    bottom:15px;

    span {
      font-size: 18px;
      font-weight: bold;
      color: #db4444;

      &.disc {
        color: #777;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }

    .rating {
      display: flex;

      img {
        width: 16px;
        margin-right: 2px;

        @media (max-width: 1080px) {
          width: 14px;
        }
        @media (max-width: 768px) {
          width: 12px;
        }
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #777;
        margin-left: 10px;

        @media (max-width: 1080px) {
          font-size: 12px;
        }
        @media (max-width: 768px) {
          font-size: 10px;
        }
      }
    }
  }

  .color {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    position: absolute;
    z-index: 1;
    bottom: 0;

    div {
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
    }

    @media (max-width: 1080px) {
      div {
        width: 18px;
        height: 18px;
      }
    }
    @media (max-width: 768px) {
      div {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export const Product = () => {
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleWishlistToggle = (productId) => {
    dispatch(toggleWishlist(productId));
  };

  const handleAddToCart = () => {
    dispatch(addToCart());
  };

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
    <ProdsSection>
      <ProdsContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProdCard key={product.id}>
              <ProdTop>
                {product.new && <span>NEW</span>}
                {product.off && <span className="off">-{product.offer}%</span>}
                <img className="main" src={require(`../assets/images/${product.img}`)} alt={product.name} />
                <div className="icons">
                  <img
                    className={`like ${wishlist.includes(product.id) ? 'liked' : ''}`}
                    src={Like}
                    alt="Wishlist"
                    onClick={() => handleWishlistToggle(product.id)}
                  />
                  <img className="view" src={View} alt="Quick View" />
                </div>
                <div className="btn" onClick={handleAddToCart}>
                  <p>Add To Cart</p>
                </div>
              </ProdTop>
              <ProdBottom>
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
              </ProdBottom>
            </ProdCard>
          ))
        ) : (
          <NoMatchFound>No match found</NoMatchFound>
        )}
      </ProdsContainer>
    </ProdsSection>
  );
};



