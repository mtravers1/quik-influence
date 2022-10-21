import { ProductDataType } from 'components/MarketPlace/ProductCard';
import { axiosInstance } from 'utils/helpers';
import { ADD_ITEMS_TO_CART, UPDATE_CART_ITEM } from '../actionTypes';

const getCartItem = async (cartItem: any, product: ProductDataType) => {
  let cartRestponse;

  if (cartItem.userId) {
    const res = await axiosInstance.post('/cart', {
      productId: product.id,
      quantity: cartItem.quantity,
    });
    cartRestponse = res.data.data;
  } else {
    cartRestponse = {
      ...cartItem,
      product,
    };
  }

  return cartRestponse;
};

export const addItemsToCart =
  (cartItem: any, product: ProductDataType) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const cartRestponse = await getCartItem(cartItem, product);

    dispatch({
      type: ADD_ITEMS_TO_CART,
      payload: {
        cartItem: cartRestponse,
      },
    });
  };

export const updateCartItems =
  (cartItem: any, product: ProductDataType) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const cartRestponse = await getCartItem(cartItem, product);

    dispatch({
      type: UPDATE_CART_ITEM,
      payload: {
        cartItem: cartRestponse,
      },
    });
  };
