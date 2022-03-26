import { CREATE_FORM_DATA, CREATE_TAGS, ADD_TAGS } from '../actionTypes';

const generals = (
  state = {
    formData: undefined,
    tags: undefined,
  },
  action: any
) => {
  switch (action.type) {
    case CREATE_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };

    case CREATE_TAGS:
      return {
        ...state,
        tags: action.payload,
      };

    case ADD_TAGS:
      return {
        ...state,
        tags: [...(state.tags || []), action.payload],
      };

    default:
      return state;
  }
};

export default generals;
