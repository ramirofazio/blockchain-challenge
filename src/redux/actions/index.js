export const WALLET_HOME_TEXT = 'WALLET_HOME_TEXT';

export function walletHomeText(homeText) {
    return function (dispatch) {
        return dispatch({
            type: WALLET_HOME_TEXT,
            payload: homeText
        })
    }
}