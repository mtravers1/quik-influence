import { actions } from "react-table"
import { CAMPAIGNS, CAMPAIGNS_ERROR, CAMPAIGNS_LOADING } from "redux/actionTypes"


export const initialState = {
    campaigns: null,
}

const campaigns = (state = initialState, action) => {
    switch (action.type) {
        case CAMPAIGNS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CAMPAIGNS:
            return {
                ...state,
                campaigns: action.payload,
            }
        case CAMPAIGNS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: state.loading
            }
        default:
            return state;
    }
}

export default campaigns