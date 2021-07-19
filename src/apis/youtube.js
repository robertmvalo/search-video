import axios from 'axios';


const KEY = 'AIzaSyAbIz0QMPhI8zI-ebf_U-poV17GKl-xE0Q';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});