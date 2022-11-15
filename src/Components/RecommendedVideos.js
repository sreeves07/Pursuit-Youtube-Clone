import React from 'react';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard'
import './RecommendedVideos.css'
import { fetchData } from './Fetch';

const RecommendedVideos = () => {
    // useEffect(() => {
    //     fetchData()
    //         .then((data) => console.log(data))
    // },[])

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