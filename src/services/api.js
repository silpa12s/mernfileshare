import axios from 'axios';

const APL_URL='http://localhost:8000';

export const uploadFile= async (data)=>{
    try {
        let response= await axios.post(`${APL_URL}/upload`,data)
        return response.data;
    } catch (error) {
        console.log("Error while calling the api", error.message);
    }
}


