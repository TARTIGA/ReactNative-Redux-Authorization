import { GET_TOKEN, DELETE_TOKEN } from '../reducers/constants'

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

export function deleteToken() {
    return {
        type: DELETE_TOKEN,
        payload: {
        }
    };
}