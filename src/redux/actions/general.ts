import { CREATE_FORM_DATA } from '../actionTypes';

export const createFormData =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: CREATE_FORM_DATA,
      payload: data,
    });
  };
