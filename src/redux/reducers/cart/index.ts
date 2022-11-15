import { CartDataType } from 'modules/MarketPlace/interfaces';
import {
  ADD_ITEMS_TO_CART,
  DELETE_CART_ITEM,
  UPDATE_CART_ITEM,
  CLEAR_CART,
  INITIALIZE_CART,
} from '../../actionTypes';
import {
  calculateTotal,
  addToCartLoggedOut,
  updateCartItemQuantity,
  deleteCartItemLocal,
} from './helpers';

const initailState: CartDataType = { total: 0, CampaignCartProducts: [] };

const cart = (state = initailState, action: any) => {
  let newCart: CartDataType | undefined;

  switch (action.type) {
    case INITIALIZE_CART:
      if (!action.payload.userId) {
        const localCartStr: CartDataType | string =
          localStorage.getItem('cartItems') ||
          `{"total":0,"CampaignCartProducts":[]}`;

        const localCart: CartDataType = JSON.parse(localCartStr);

        return localCart;
      } else {
        localStorage.setItem(
          'cartItems',
          `{"total":0,"CampaignCartProducts":[]}`
        );
      }

      return action.payload.cart;

    case ADD_ITEMS_TO_CART:
      if (!action.payload.cartItem.userId) {
        addToCartLoggedOut(action.payload.cartItem);
      }

      return action.payload.cart;

    case UPDATE_CART_ITEM:
      newCart = updateCartItemQuantity(state, action.payload.cartItem);

      if (!action.payload.cartItem.userId) {
        localStorage.setItem('cartItems', JSON.stringify(newCart));
      }

      return action.payload.cart;

    case DELETE_CART_ITEM:
      newCart = deleteCartItemLocal(state, action.payload.cartItemId);

      if (!action.payload.userId) {
        localStorage.setItem('cartItems', JSON.stringify(newCart));
      }

      return {
        ...state,
        ...newCart,
      };

    case CLEAR_CART:
      if (!action.payload.userId) {
        localStorage.setItem('cartItems', JSON.stringify(initailState));
      }

      return initailState;

    default:
      return state;
  }
};

export default cart;
