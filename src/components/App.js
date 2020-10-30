import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {

const [selectedVideo, setSelectedVideo] = useState(null);
// custom hook
const [videos, onTermSubmit] = useVideos('React js');

useEffect(() => {
  setSelectedVideo(videos[0]);
},[videos])

    return(
      <div className="ui container">
        <SearchBar onFormSubmit={onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
               <VideoDetail video={selectedVideo}/>
            </div>
            <div className="six wide column">
              <VideoList videos={videos}
                onVideoSelect={(video) => setSelectedVideo(video)}/>
            </div>
          </div>
        </div>
      </div>
    );
};



export default App;
