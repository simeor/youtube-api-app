// custom hook to search for videos and making list

import  {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSeacrhTerm) =>{

  const [videos, setVideo] = useState([]);

  useEffect(() => {
    onTermSubmit(defaultSeacrhTerm)
  },[defaultSeacrhTerm]);


  const onTermSubmit = async (term) => {
    const res = await youtube.get('/search',{
      params:{
        q: term
      }
  });
    setVideo(res.data.items);
  };

  return [videos, onTermSubmit];
};

export default useVideos;
