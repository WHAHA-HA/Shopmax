import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
  ADD_ITEM,
  UPDATE_CART_ITEM,
  REMOVE_ITEM,
  SHOW_LOADING,
  HIDE_LOADING,
} from 'actions';

export const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  isOverlayVisible: false,
  loading: {
    isLoading: false,
    duration: 0,
  },
  errorID: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_REQUEST:
      return {
        ...state,
      };
    case FETCH_ALL_FAILURE:
      return {
        ...state,
        errorID: action.payload,
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.container]: [
          ...state[action.payload.container],
          action.payload.item,
        ],
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map(cartItem =>
          cartItem.id === action.payload.id &&
          cartItem.size === action.payload.size
            ? action.payload
            : cartItem,
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.container]: state[action.payload.container].filter(
          ({ id, size }) =>
            id !== action.payload.itemID || size !== action.payload.size,
        ),
      };
    case SHOW_LOADING:
      return {
        ...state,
        loading: {
          isLoading: true,
          duration: action.payload,
        },
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: {
          isLoading: false,
          duration: 0,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
