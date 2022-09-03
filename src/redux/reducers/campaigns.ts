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
  JOINABLE_CAMPAIGNS_LOADING,
  JOINABLE_CAMPAIGNS,
  JOINABLE_CAMPAIGNS_ERROR,
  GET_ALL_CAMPIGN_PRODUCTS,
  CREATE_CAMPAIGN_PRODUCT,
  EDIT_CAMPAIGN_PRODUCT,
  ARCHIVE_CAMPAIGN_PRODUCT,
} from 'redux/actionTypes';

export const initialState = {
  campaigns: null,
  joinableCampaigns: {},
  SMSCampaign: null,
  loading: true,
  leads: {},
  firstCampaigns: null,
  products: {},
};

const campaigns = (
  state: any = initialState,
  action: { type: any; payload: any }
) => {
  const campaignProducts = state.products[action.payload?.campaignId] || [];

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
    case JOINABLE_CAMPAIGNS_LOADING:
      return {
        ...state,
        joinableCampaigns: {
          ...state.joinableCampaigns,
          loading: action.payload,
        },
      };
    case JOINABLE_CAMPAIGNS_ERROR:
      return {
        ...state,
        joinableCampaigns: {
          ...state.joinableCampaigns,
          error: action.payload,
          loading: false,
        },
      };
    case JOINABLE_CAMPAIGNS:
      return {
        ...state,
        joinableCampaigns: {
          ...state.joinableCampaigns,
          data: action.payload,
          loading: false,
        },
      };

    case GET_ALL_CAMPIGN_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.campaignId]: action.payload.products,
        },
      };

    case CREATE_CAMPAIGN_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.campaignId]: [
            ...campaignProducts,
            action.payload.product,
          ],
        },
      };

    case EDIT_CAMPAIGN_PRODUCT:
      const products = campaignProducts.map((product: any) => {
        if (product.id === action.payload.productId) {
          return action.payload.product;
        }

        return product;
      });

      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.campaignId]: products,
        },
      };

    case ARCHIVE_CAMPAIGN_PRODUCT:
      const allProducts = campaignProducts.map((product: any) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            status: action.payload.status,
          };
        }

        return product;
      });

      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.campaignId]: allProducts,
        },
      };

    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default campaigns;
