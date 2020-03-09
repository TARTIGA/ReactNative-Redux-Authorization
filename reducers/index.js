// https://github.com/svrcekmichal/redux-axios-middleware
// Every action which have payload.request defined will be handled by middleware. There are two possible type definitions.

// use action.type with string name
// action with type will be dispatched on start, and then followed by type suffixed with underscore and
// success suffix on success, or error suffix on error
// defaults: success suffix = "_SUCCESS" error suffix = "_FAIL"
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