import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";


const App = () => {

  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("React js")
  },[]);

  const onTermSubmit = async (term) => {
    const res = await youtube.get('/search',{
      params:{
        q: term
      }
    });
    setVideo(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };


    return(
      <div className="ui container">
        <SearchBar onFormSubmit={onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
               <VideoDetail video={selectedVideo}/>
            </div>
            <div className="six wide column">
              <VideoList videos={video}
                onVideoSelect={(video) => setSelectedVideo(video)}/>
            </div>
          </div>
        </div>
      </div>
    );
};



export default App;
