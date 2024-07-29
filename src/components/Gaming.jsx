import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlist, addToCart } from '../actions';
import Like from '../assets/images/Wishlist.svg'
import View from '../assets/images/Quick View.svg'
import productsData from '../Allproducts.json';
import game from '../assets/images/game.png'
import fStar from '../assets/images/f-star.png'
import eStar from '../assets/images/e-star.png'
import hStar from '../assets/images/h-star.png'
import delivery from '../assets/images/icon-delivery1.png'
import returnicon from '../assets/images/Icon-return.svg'


export const Gaming = () => {
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
    <section id="gaming">
        <div className="gaming">
            <div className="bar">
                <p>Home / Gaming / <span>Havic HV G-92 Gamepad</span></p>
            </div>
            <div className="gamepad">
                <div className="left">
                    <img src={game} alt='Gamepad'/>
                </div>
                <div className="right">
                    <h2>Havic HV G-92 Gamepad</h2>
                    <div className="rate">
                        <div className="star">
                            <img src={fStar} alt='no_img'/>
                            <img src={fStar} alt='no_img'/>
                            <img src={fStar} alt='no_img'/>
                            <img src={fStar} alt='no_img'/>
                            <img src={eStar} alt='no_img'/>
                        </div>
                        <p>(150 Reviews)</p>
                        <p>|</p>
                        <span> In Stock</span>
                    </div>
                    <h3>$192.00</h3>
                    <p>
                        PlayStation 5 Controller Skin High quality vinyl with air
                        channel adhesive for easy bubble free install & mess 
                        free removal Pressure sensitive.
                    </p>
                    <hr/>
                    <div className="colr">
                        <h4>Colours:</h4>
                        <div className="colr-1"></div>
                        <div className="colr-2"></div>
                    </div>
                    <div className="features">
                        <div className="fe-1">
                            <div className="lt">
                                <img src={delivery} alt='Delivery'/>
                            </div>
                            <div className="rt">
                                <h5>Free Delivery</h5>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="fe-2">
                            <div className="lt">
                                <img src={returnicon} alt='return'/>
                            </div>
                            <div className="rt">
                                <h5>Return Delivery</h5>
                                <p>Free 30 Days Delivery Returns.<span> Details</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="re-items-sec">
            <div className="head">
                <div className="red"></div>
                <h3>Related Item</h3>
            </div>
            <div className="items">
                {products.filter(product => product.id > 8).map(product => (
                    <div className="item" key={product.id}>
                        <div className="item-1-top">
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
                        <div className="item-1-btm">
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
                ))}
                
            </div>
        </div>
    </section>
    </>
  )
}
