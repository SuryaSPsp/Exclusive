export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_FILTERED_PRODUCTS = 'SET_FILTERED_PRODUCTS';
export const TOGGLE_WISHLIST = 'TOGGLE_WISHLIST';
export const ADD_TO_CART = 'ADD_TO_CART';

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const setFilteredProducts = (products) => ({
  type: SET_FILTERED_PRODUCTS,
  payload: products,
});


export const toggleWishlist = (productId) => ({
  type: TOGGLE_WISHLIST,
  payload: productId,
});

export const addToCart = () => ({
  type: ADD_TO_CART,
});
