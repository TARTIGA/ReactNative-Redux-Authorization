import { GET_TOKEN } from '../reducers/constants'

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