import axios from 'axios';

const LoadExclusiveRoomsData = async () => {
    return await axios({
        method: 'GET',
        url: 'https://pandaapi.amreshrepos.ml/api/v1/view-recommended',
        headers:{
            'Accept-Language' : 'en'
        }
    })
    .then(function (response) {
        return response.data.data.recommended;
    })
    .catch(function (error) {
        return error.response.data;
    });
}

export default LoadExclusiveRoomsData;