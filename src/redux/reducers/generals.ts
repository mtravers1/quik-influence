import {
  CREATE_FORM_DATA,
  CREATE_TAGS,
  ADD_TAGS,
  CREATE_FORM_INPUT,
  UPDATE_FORM_INPUT,
} from '../actionTypes';

const generals = (
  state = {
    formData: undefined,
    tags: undefined,
    formInputs: [],
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

    case CREATE_FORM_INPUT:
      return {
        ...state,
        formInputs: action.payload,
      };

    case UPDATE_FORM_INPUT:
      return {
        ...state,
        formInputs: [...state.formInputs, action.payload],
      };

    default:
      return state;
  }
};

export default generals;
