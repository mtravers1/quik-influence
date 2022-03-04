import { CREATE_NAV } from "../actionTypes";

const createNav =
  (nav: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: CREATE_NAV,
      payload: nav
    });
  };

export default createNav;
