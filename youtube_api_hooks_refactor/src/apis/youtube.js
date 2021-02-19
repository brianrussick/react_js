import axios from 'axios';

const KEY = 'AIzaSyBXPlZ42i-Al1qGvEoGpFefe_WwzvRBhoY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});