import { loadHotelDetailsDataPending, loadHotelDetailsDataSuccess, loadHotelDetailsDataError } from '../actions/hotelDetailActions';
import axios from 'axios';

const LoadHotelDetailsData = (url) => {
    // return dispatch => {
    //     dispatch(loadHotelDetailsDataPending());
        return axios({
            method: 'GET',
            url: 'https://pandaapi.amreshrepos.ml/api/v1/view-hotel?alias='+url,
            headers:{
                'Accept-Language' : 'en'
            }
        })
        .then(function (response) {
            // console.log(response.data.data)
            // dispatch(loadHotelDetailsDataSuccess('success'));
            return response.data.data;
        })
        .catch(function (error) {
            // dispatch(loadHotelDetailsDataError(error));
        });
    // }
}

export default LoadHotelDetailsData;