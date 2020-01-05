import { saveReview } from '../actions/hotelDetailActions';
import axios from 'axios';

const saveReviewRating = (data) => {
    console.log(data);
    return dispatch => {
        dispatch(saveReview({saveReviewPending: true, error: false, message: ''}));
        axios({
            method: 'POST',
            url: 'https://pandaapi.amreshrepos.ml/api/v1/add-rating',
            headers:{
                'Accept-Language' : 'en'
            },
            data: data
        })
        .then(function (response) {
            dispatch(saveReview({saveReviewPending: false, message: 'success'}));
        })
        .catch(function (error) {
            dispatch(saveReview({saveReviewPending: false, error: true, message: Object.values(error.response.data.error)[0][0]}));
        });
    }

}

export default saveReviewRating;