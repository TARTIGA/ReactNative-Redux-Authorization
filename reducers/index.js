import { GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_FAIL, DELETE_TOKEN } from './constants'

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
        case DELETE_TOKEN:
            return {
                ...state,
                token: null,
            };
        default:
            return state;
    }
}
