import { GET_CURRENT_PRODUCT } from '../actionTypes';

const product = (
  state = {
    currentProduct: null,
  },
  action: any
) => {
  switch (action.type) {
    case GET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload.product,
      };

    default:
      return state;
  }
};

export default product;
