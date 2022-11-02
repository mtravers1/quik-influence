import { ProductDataType } from 'modules/MarketPlace/interfaces';
import { GET_CURRENT_PRODUCT } from '../actionTypes';

export const getCurrentProduct =
  (product: ProductDataType, productId?: string) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    let currentProduct = product;

    dispatch({
      type: GET_CURRENT_PRODUCT,
      payload: {
        product: currentProduct,
      },
    });
  };
