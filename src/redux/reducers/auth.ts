import { LOGIN, LOGOUT, AUTH_LOADING, SET_PERMISSIONS } from '../actionTypes';

export const initialState = {
  user: null,
  loading: false,
  permissions: [],
};

const user = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
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
    case SET_PERMISSIONS:
      return {
        ...state,
        permissions: action.payload,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default user;
