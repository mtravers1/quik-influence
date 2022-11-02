import {
  ProductDataType,
  CartItemDataType,
  CartDataType,
} from 'modules/MarketPlace/interfaces';
import { axiosInstance } from 'utils/helpers';
import {
  ADD_ITEMS_TO_CART,
  UPDATE_CART_ITEM,
  DELETE_CART_ITEM,
  CLEAR_CART,
  INITIALIZE_CART,
} from '../actionTypes';
import { getCartItems } from 'modules/MarketPlace/serverSideFunc';

const getCartItem = async (
  cartItem: CartItemDataType,
  product: ProductDataType
) => {
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
  (cartItem: CartItemDataType, product: ProductDataType) =>
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
  (cartItem: CartItemDataType, product: ProductDataType) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const cartRestponse = await getCartItem(cartItem, product);

    dispatch({
      type: UPDATE_CART_ITEM,
      payload: {
        cartItem: cartRestponse,
      },
    });
  };

export const deleteCartItems =
  (cartItemId: string, userId: string) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    if (userId) {
      await axiosInstance.delete(`/cart/${cartItemId}`);
    }

    dispatch({
      type: DELETE_CART_ITEM,
      payload: {
        cartItemId,
        userId,
      },
    });
  };

export const clearCartItems =
  (userId: string) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    if (userId) {
      try {
        await axiosInstance.delete(`/cart`);
      } catch (err) {
        // jude:(todo) handle error

        return;
      }
    }

    dispatch({
      type: CLEAR_CART,
      payload: {
        userId,
      },
    });
  };

export const getAllCartItems =
  (
    userId: string,
    serverCartItems: CartDataType,
    campaignId: string,
    campaignAdminId: string
  ) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      if (!userId) {
        throw Error('No user');
      }

      const cartItems =
        serverCartItems || (await getCartItems(campaignId, campaignAdminId));
      const localCartStr: CartDataType | string =
        localStorage.getItem('cartItems') || '{}';

      let localCart: CartDataType = JSON.parse(localCartStr);

      if (localCart?.CampaignCartProducts?.length) {
        const updatedCampaignCartProducts: any = [];

        for (const item of localCart?.CampaignCartProducts) {
          try {
            const accepted = await axiosInstance.post('/cart/add', item);

            updatedCampaignCartProducts.push({
              ...item,
              id: accepted.data.data.id,
            });
          } catch (err) {}
        }

        localCart.CampaignCartProducts = updatedCampaignCartProducts;
        localStorage.removeItem('cart');
      } else {
        localCart = {
          total: 0,
          CampaignCartProducts: [],
        };
      }

      let serverCartItemsMap = {};
      let localCartItemsMap = {};

      if (serverCartItems?.CampaignCartProducts?.length) {
        serverCartItemsMap = cartItems.CampaignCartProducts.reduce(
          (acc: any, cur: any) => {
            acc[cur.id] = cur;

            return acc;
          },
          {}
        );
      }

      if (localCart?.CampaignCartProducts?.length) {
        localCartItemsMap = localCart.CampaignCartProducts.reduce(
          (acc: any, cur: any) => {
            acc[cur.id] = cur;

            return acc;
          },
          {}
        );
      }

      const combinedCartMap = {
        ...serverCartItemsMap,
        ...localCartItemsMap,
      };

      const combinedCartItems = Object.values(combinedCartMap);
      const totalCartAmount = combinedCartItems.reduce((acc: any, cur: any) => {
        return acc + cur.quantity * cur.product.price;
      }, 0);

      dispatch({
        type: 'INITIALIZE_CART',
        payload: {
          userId,
          cart: {
            total: totalCartAmount,
            CampaignCartProducts: combinedCartItems,
          },
        },
      });
    } catch (err) {
      dispatch({
        type: 'INITIALIZE_CART',
        payload: {
          userId,
        },
      });
    }
  };
