import { GET_CAMPAIGN } from '../actionTypes';

const presets = (state = {}, action) => {
  switch (action.type) {
    case GET_CAMPAIGN:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};

export default presets;
