import { CREATE_NAV } from '../actionTypes';

const wishlist = (state = null, action: any) => {
  switch (action.type) {
    case CREATE_NAV:
      return action.payload;

    default:
      return state;
  }
};

export default wishlist;
