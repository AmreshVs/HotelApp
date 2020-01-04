import { loadExRoomsDataPending, loadExRoomsDataSuccess, loadExRoomsDataError } from '../actions/loadAllExclusive';
import axios from 'axios';

const LoadExclusiveRoomsData = () => {
    return dispatch => {
        dispatch(loadExRoomsDataPending());
        axios({
            method: 'GET',
            url: 'https://pandaapi.amreshrepos.ml/api/v1/view-recommended',
            headers:{
                'Accept-Language' : 'en'
            }
        })
        .then(function (response) {
            dispatch(loadExRoomsDataSuccess(response.data.data.recommended));
        })
        .catch(function (error) {
            dispatch(loadExRoomsDataError(error));
        });
    }
}

export default LoadExclusiveRoomsData;