const axios = require('axios');

module.exports.getAddressCordinate = async (address) =>{

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `hhtps://maps.google.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {

        const response = axios.get(url);
        if(response.data.status === "Ok"){
            const location = (await response).data.results[0].geometry.location;
            return {
                ltd:location.lat,
                lng:location.lng,
            };
        }else{
            throw new Error('Unable to fetch coordinates')
        }


    } catch (error) {
        console.error(error);
        throw error;
        
    }

}