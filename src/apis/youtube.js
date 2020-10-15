import axios from 'axios';

const KEY = process.env.REACT_APP_SECRET_CODE // must be local host - API lock

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
