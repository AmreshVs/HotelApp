import axios from 'axios';

const LoadHotelDetailsData = async (url) => {
    return await axios({
        method: 'GET',
        url: 'https://pandaapi.amreshrepos.ml/api/v1/view-hotel?alias='+url,
        headers:{
            'Accept-Language' : 'en'
        }
    })
    .then(function (response) {
        return response.data.data;
    })
    .catch(function (error) {
        return error.response.data;
    });
}

export default LoadHotelDetailsData;