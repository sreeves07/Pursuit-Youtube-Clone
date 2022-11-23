import React from 'react';
import './SearchResults.css'
import VideoCard from './VideoCard';


const SearchResults = ({ searchedVideos }) => {

    return (
        <div className='recommendedVideos'>
            <div className='recommendedVideos__videos'>
                { searchedVideos.length > 0 ? searchedVideos.map((video) => {
                    return ( 
                        <div className="video" key={video.id.videoId || video.id.channelId}>
                            <VideoCard video={video}/>
                        </div>
                    )}) : null
                }
            </div>
        </div>
    );
};

export default SearchResults;