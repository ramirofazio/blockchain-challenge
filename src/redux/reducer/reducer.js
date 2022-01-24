import { WALLET_HOME_TEXT, TRIVIA_FINISHED } from "../actions/index";

let initialState = {
    walletHomeText: "Connect Your Wallet",
    results: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TRIVIA_FINISHED:
            return {
                ...state,
                results: action.payload,
            }
        case WALLET_HOME_TEXT:
            return {
                ...state,
                walletHomeText: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;