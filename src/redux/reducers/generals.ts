import { CREATE_FORM_DATA } from '../actionTypes';

const generals = (
  state = {
    formData: undefined,
  },
  action: any
) => {
  switch (action.type) {
    case CREATE_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };

    default:
      return state;
  }
};

export default generals;
