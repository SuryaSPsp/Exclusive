import { SET_SEARCH_TERM, SET_FILTERED_PRODUCTS } from './actions';
import products from './Allproducts.json';
import { TOGGLE_WISHLIST, ADD_TO_CART } from './actions';

const initialState = {
  searchTerm: '',
  products,
  filteredProducts: products,
  wishlist: [],
  cartCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case TOGGLE_WISHLIST:
        const isWishlisted = state.wishlist.includes(action.payload);
        return {
          ...state,
          wishlist: isWishlisted
            ? state.wishlist.filter(id => id !== action.payload)
            : [...state.wishlist, action.payload],
        };
    case ADD_TO_CART:
        return {
          ...state,
          cartCount: state.cartCount + 1,
        };  
    default:
      return state;
  }
};

export default reducer;



