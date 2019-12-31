import { loadRcDataPending, loadRcDataSuccess, loadRcDataError } from '../actions/loadAllRecommended';
import axios from 'axios';

const LoadRecommendedRoomsData = () => {
    return dispatch => {
        dispatch(loadRcDataPending());
        axios({
            method: 'GET',
            url: 'https://pandaapi.amreshrepos.ml/api/v1/view-recommended',
            headers:{
                'Accept-Language' : 'en'
            }
        })
        .then(function (response) {
            dispatch(loadRcDataSuccess(response.data.data.recommended));
        })
        .catch(function (error) {
            dispatch(loadRcDataError(error));
        });
    }

}

export default LoadRecommendedRoomsData;