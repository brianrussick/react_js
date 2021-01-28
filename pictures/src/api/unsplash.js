import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID uo9QC_SFf9GxUC9HENdpEYDjPuOLyf7gFlGDSfFYjvA'
    }
});