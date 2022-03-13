import { actions } from 'react-table';
import {
  CAMPAIGNS,
  CAMPAIGNS_ERROR,
  CAMPAIGNS_LOADING,
  GET_SINGLE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  ARCHIVE_CAMPAIGN,
  SET_SMS_CAMPAIGN,
  GET_CAMPAIGN_LEADS,
  FIRST_TEN_CAMPAIGNS,
} from 'redux/actionTypes';

export const initialState = {
  campaigns: null,
  SMSCampaign: null,
  loading: true,
  leads: {},
  firstCampaigns: null,
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

    case FIRST_TEN_CAMPAIGNS:
      return {
        ...state,
        firstCampaigns: action.payload,
      };

    case CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload.rows,
        count: action.payload.count,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
      };
    case GET_CAMPAIGN_LEADS:
      return {
        ...state,
        leads: {
          [action.payload.campaignId]: action.payload.leads,
        },
      };
    case GET_SINGLE_CAMPAIGN:
      return {
        ...state,
        currentCampaign: action.payload,
      };
    case SET_SMS_CAMPAIGN:
      return {
        ...state,
        SMSCampaign: action.payload,
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
