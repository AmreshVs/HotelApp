import { loadHomeDataPending, loadHomeDataSuccess, loadHomeDataError } from '../actions/homeDataActions';
import axios from 'axios';

const LoadHomeData = () => {
    return dispatch => {
        dispatch(loadHomeDataPending());
        axios({
            method: 'GET',
            url: 'https://pandaapi.amreshrepos.ml/api/v1/home',
            headers:{
                'Accept-Language' : 'en'
            }
        })
        .then(function (response) {
            dispatch(loadHomeDataSuccess(response.data.data));
        })
        .catch(function (error) {
            dispatch(loadHomeDataError(error));
        });
    }

}

export default LoadHomeData;