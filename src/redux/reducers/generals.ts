import {
  CREATE_FORM_DATA,
  CREATE_TAGS,
  ADD_TAGS,
  CREATE_FORM_INPUT,
  UPDATE_FORM_INPUT,
  GET_PAYMENT_INFO,
  UPDATE_PAYMENT_INFO,
  CREATE_PAYMENT_INFO,
  GET_COUNTRIES,
  UPDATE_STATES,
  GET_DASHBOARD_INFO,
  SET_MENU,
  SET_OPEN_PANEL,
} from '../actionTypes';

const generals = (
  state = {
    formData: undefined,
    tags: undefined,
    formInputs: [],
    paymentInfo: undefined,
    countryData: {
      country: [],
      state: {},
    },
    dashboardData: undefined,
    menu: {
      presentMenu: '',
      openPanel: false,
    },
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

    case GET_PAYMENT_INFO:
      return {
        ...state,
        paymentInfo: action.payload,
      };

    case UPDATE_PAYMENT_INFO:
      return {
        ...state,
        paymentInfo: (state.paymentInfo || [])?.map((paymentInfo: any) => {
          if (paymentInfo.id === action.payload.id) {
            return action.payload;
          }

          if (action.payload.isDefault) {
            return { ...paymentInfo, isDefault: false };
          }

          return paymentInfo;
        }),
      };

    case CREATE_PAYMENT_INFO:
      return {
        ...state,
        paymentInfo: (state.paymentInfo || [])
          ?.map((paymentInfo: any) => {
            if (action.payload.isDefault) {
              return { ...paymentInfo, isDefault: false };
            }

            return paymentInfo;
          })
          .concat(action.payload),
      };

    case GET_COUNTRIES:
      return {
        ...state,
        countryData: {
          ...state.countryData,
          ...action.payload,
        },
      };

    case UPDATE_STATES:
      return {
        ...state,
        countryData: {
          ...(state.countryData || {}),
          state: {
            ...(state?.countryData?.state || {}),
            ...action.payload,
          },
        },
      };

    case GET_DASHBOARD_INFO:
      return {
        ...state,
        dashboardData: action.payload,
      };

    case 'RESET':
      return {
        ...state,
        paymentInfo: undefined,
        dashboardData: undefined,
      };

    case 'SET_MENU':
      return {
        ...state,
        menu: {
          ...state.menu,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default generals;
