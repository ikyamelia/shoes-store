import { DELETE_CART, SET_PRODUCT, UPDATE_CART } from "../constants/action-type";

const initialState = {
  product: [],
  cart: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SET_PRODUCT: {
      return {
        ...state,
        product: action.payload
      }
    }
    case UPDATE_CART: {
      let updatedCart = []
      let product = state.cart.find(value => value.product === action.payload.product && value.color === action.payload.color && value.size === action.payload.size)
      if (product) {
        state.cart.forEach(element => {
            element.qty++
            updatedCart = [...updatedCart, element]
        });
      } else {
        updatedCart = [
            ...state.cart,
            {
              qty: 1,
              size: action.payload.size,
              color: action.payload.color,
              product: action.payload.product
            }
          ]
      }
      return {
        ...state,
        cart: updatedCart
      }
    }
    case DELETE_CART: {
      return {
        ...state,
        cart: state.cart.filter(element => element !== action.payload)
      }
    }
    default: return state
  
  }
};

export default rootReducer
