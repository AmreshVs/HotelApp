import { saveReview } from '../actions/hotelDetailActions';
import axios from 'axios';

const saveReviewRating = (data) => {
    return dispatch => {
        dispatch(saveReview({error: false, message: ''}));
        axios({
            method: 'POST',
            url: 'https://pandaapi.amreshrepos.ml/api/v1/add-rating',
            headers:{
                'Authorization': 'Bearer testdummy'
            },
            data: data,
            
        })
        .then(function (response) {
            dispatch(saveReview({error: false, message: 'success'}));
        })
        .catch(function (error) {
            dispatch(saveReview({error: true, message: Object.values(error.response.data.error)[0][0]}));
        });
    }

}

export default saveReviewRating;