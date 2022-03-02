import { CREATE_NAV } from '../actionTypes';

export default createNav = nav => async dispatch => {
  dispatch({
    type: CREATE_NAV,
    payload: nav,
  });
};
