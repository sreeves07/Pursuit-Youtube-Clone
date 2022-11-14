import React from 'react';
import VideoCard from './VideoCard'
import './RecommendedVideos.css'

const RecommendedVideos = () => {
    return (
        <div className='recommendedVideos'>
            <h2>Recommended</h2>
            <div className='recommendedVideos__videos'>
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
};

export default RecommendedVideos;