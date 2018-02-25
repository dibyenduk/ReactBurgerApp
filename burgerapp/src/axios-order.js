import axios from 'axios';

const instance = axios.create({
    // Add by logging into Firebase with gmail account and check base url of realtime database.
    baseURL : "https://XYZ.firebaseio.com/"
});

export default instance;