import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Like from '../assets/images/Wishlist.svg'
import View from '../assets/images/Quick View.svg'
import fStar from '../assets/images/f-star.png'
import eStar from '../assets/images/e-star.png'
import hStar from '../assets/images/h-star.png'
import { toggleWishlist, addToCart } from '../actions';


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
    <>
      <section id="prods">
            <div className="prods">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div className="prod" key={product.id}>
                    <div className="prod-1-top">
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
                        <div className="btn" onClick={handleAddToCart} >
                            <p>Add To Cart</p>
                        </div>
                    </div>
                    <div className="prod-1-btm">
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
                    </div>
                </div>
              ))
            ) : (
                  <p className='res'>No match found</p>
                )}
              
            </div>
      </section>
    </>
  )
}
