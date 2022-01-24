import { WALLET_HOME_TEXT } from "../actions/index";

let initialState = {
    walletHomeText: "Connect Your Wallet"
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
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