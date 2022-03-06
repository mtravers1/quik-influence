import { actions } from 'react-table';
import {
  LEADS,
  LEADS_ERROR,
  LEADS_LOADING,
  //   GET_SINGLE_LEAD,
  //   UPDATE_LEADS,
  //   ARCHIVE_LEADS,
} from 'redux/actionTypes';

export const initialState = {
  allLeads: null,
  loading: true,
};

const campaigns = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case LEADS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LEADS:
      return {
        ...state,
        allLeads: action.payload,
      };
    // case GET_SINGLE_LEAD:
    //   return {
    //     ...state,
    //     currentLead: action.payload,
    //   };
    // case UPDATE_LEADS:
    //   return {
    //     ...state,
    //     leads: (state.leads || [])?.map((leads: any) => {
    //       if (leads.id === action.payload.leadsId) {
    //         return { ...leads, ...action.payload.data };
    //       }

    //       return leads;
    //     }),
    //   };
    // case ARCHIVE_LEADS:
    //   return {
    //     ...state,
    //     leads: (state.leads || [])?.filter(
    //       (lead: any) => lead.id !== action.payload
    //     ),
    //   };
    case LEADS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: state.loading,
      };
    default:
      return state;
  }
};

export default campaigns;
