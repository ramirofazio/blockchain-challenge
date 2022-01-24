export const WALLET_HOME_TEXT = 'WALLET_HOME_TEXT';
export const TRIVIA_FINISHED = 'TRIVIA_FINISHED';


export function walletHomeText(homeText) {
    return function (dispatch) {
        return dispatch({
            type: WALLET_HOME_TEXT,
            payload: homeText
        })
    }
}

export function triviaFinished(results) {
    return function (dispatch) {
        return dispatch({
            type: TRIVIA_FINISHED,
            payload: results
        })
    }
}