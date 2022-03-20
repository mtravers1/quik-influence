import { CREATE_FORM_DATA, CREATE_TAGS, ADD_TAGS } from '../actionTypes';

export const createFormData =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: CREATE_FORM_DATA,
      payload: data,
    });
  };

export const createTags =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: CREATE_TAGS,
      payload: data,
    });
  };

export const addTags =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: ADD_TAGS,
      payload: data,
    });
  };
