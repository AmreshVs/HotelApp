import axios from 'axios';

const LoadHomeData = async () => {
    return await axios({
        method: 'GET',
        url: 'https://pandaapi.amreshrepos.ml/api/v1/home',
        headers:{
            'Accept-Language' : 'en',
            'Authorization': 'Bearer testdummy'
        }
    })
    .then(function (response) {
        return response.data.data;
    })
    .catch(function (error) {
        return error.response.data;
    });
}

export default LoadHomeData;