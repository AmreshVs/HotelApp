import { loadHotelDetailsDataPending, loadHotelDetailsDataSuccess, loadHotelDetailsDataError } from '../actions/hotelDetailActions';
import axios from 'axios';

const LoadHotelDetailsData = (url) => {
    return dispatch => {
        dispatch(loadHotelDetailsDataPending());
        axios({
            method: 'GET',
            url: 'https://pandaapi.amreshrepos.ml/api/v1/view-hotel?alias='+url,
            headers:{
                'Accept-Language' : 'en'
            }
        })
        .then(function (response) {
            dispatch(loadHotelDetailsDataSuccess(response.data.data));
        })
        .catch(function (error) {
            dispatch(loadHotelDetailsDataError(error));
        });
    }
}

export default LoadHotelDetailsData;