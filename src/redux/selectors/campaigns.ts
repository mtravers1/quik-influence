import { RootStateOrAny } from "react-redux";

export const getState = (state: RootStateOrAny) => state.campaigns;

export const getSMSCampaign = (state: RootStateOrAny) => state.campaigns.SMSCampaign;
