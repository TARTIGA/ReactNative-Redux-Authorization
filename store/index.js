import axios from 'axios'
import reducers from '../reducers';
import axiosMiddleware from 'redux-axios-middleware'
import { createStore, applyMiddleware } from 'redux';
import API from '../API'

// axios api client
const client = axios.create({
    baseURL: API.base,
    responseType: 'json'
});

const store = createStore(
    reducers,
    applyMiddleware(
        axiosMiddleware(client),
    )
);

export default store;


