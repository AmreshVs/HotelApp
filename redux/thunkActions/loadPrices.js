import { loadPrices } from '../actions/hotelDetailActions';
import axios from 'axios';

const LoadPrices = (data) => {
    return dispatch => {
        dispatch(loadPrices({pricesLoading: false, data: []}));
        axios({
            method: 'POST',
            url: 'https://pandaapi.amreshrepos.ml/api/v1/choose-room',
            headers:{
                'Accept-Language' : 'en',
                'Content-Type' : 'application/json'
            },
            data: data,
        })
        .then(function (response) {
            dispatch(loadPrices({pricesLoading: false, data: response.data}));
        })
        .catch(function (error) {
            dispatch(loadPrices({pricesLoading: false, message: error.response.data.message}));
        });
    }
}

export default LoadPrices;