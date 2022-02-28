import { LOGIN, LOGOUT, AUTH_LOADING } from '../actionTypes';

export const initialState = {
  user: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload,
        loading: state.loading,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default user;
