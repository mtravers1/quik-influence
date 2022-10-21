import { ProductDataType } from 'components/MarketPlace/ProductCard';
import { axiosInstance } from 'utils/helpers';
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
