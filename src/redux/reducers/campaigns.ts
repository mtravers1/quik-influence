import { actions } from 'react-table';
import {
  CAMPAIGNS,
  CAMPAIGNS_ERROR,
  CAMPAIGNS_LOADING,
  GET_SINGLE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  ARCHIVE_CAMPAIGN,
} from 'redux/actionTypes';

export const initialState = {
  campaigns: null,
  loading: true,
};

const campaigns = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case CAMPAIGNS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload.rows,
        count: action.payload.count,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage
      };
    case GET_SINGLE_CAMPAIGN:
      return {
        ...state,
        currentCampaign: action.payload,
      };
    case UPDATE_CAMPAIGN:
      return {
        ...state,
        campaigns: (state.campaigns || [])?.map((campaign: any) => {
          if (campaign.id === action.payload.campaignId) {
            return { ...campaign, ...action.payload.rows };
          }

          return campaign;
        }),
      };
    case ARCHIVE_CAMPAIGN:
      return {
        ...state,
        campaigns: (state.campaigns || [])?.filter(
          (campaign: any) => campaign.id !== action.payload
        ),
      };
    case CAMPAIGNS_ERROR:
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
