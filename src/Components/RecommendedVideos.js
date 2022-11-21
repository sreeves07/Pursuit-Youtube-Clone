import React from 'react';
import VideoCard from './VideoCard'
import './RecommendedVideos.css'


const RecommendedVideos = ({ searchedVideos }) => {

    return (
        <div className='recommendedVideos'>
            <h2>search results</h2>
            <div className='recommendedVideos__videos'>
                { searchedVideos.map((video) => {
                    return <VideoCard video={video} key={video.id.videoId} />

                })}
            </div>
        </div>
    );
};

export default RecommendedVideos;