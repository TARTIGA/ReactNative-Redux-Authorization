export const GET_TOKEN = 'GET_TOKEN';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAIL = 'GET_TOKEN_FAIL';

export default function reducer(state = { token: null }, action) {
    switch (action.type) {
        case GET_TOKEN:
            return { ...state, loading: true };
        case GET_TOKEN_SUCCESS:
            return { ...state, loading: false, token: action.payload.data.token };
        case GET_TOKEN_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching account'
            };
        default:
            return state;
    }
}

export function getToken() {
    return {
        type: GET_TOKEN,
        payload: {
            request: {
                url: `/auth`
            }
        }
    };
}