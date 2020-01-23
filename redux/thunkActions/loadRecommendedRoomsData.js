import axios from 'axios';

const LoadRecommendedRoomsData = async () => {
    return await axios({
        method: 'GET',
        url: 'https://pandaapi.amreshrepos.ml/api/v1/view-recommended',
        headers:{
            'Accept-Language' : 'en',
            'Authorization': 'Bearer testdummy'
        }
    })
    .then(function (response) {
        return response.data.data.recommended;
    })
    .catch(function (error) {
        return error.response.data;
    });
}

export default LoadRecommendedRoomsData;