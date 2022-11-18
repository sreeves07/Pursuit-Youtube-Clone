import React from 'react';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard'
import './RecommendedVideos.css'

const RecommendedVideos = ({ searchInput, setSearchInput }) => {
    // useEffect(() => {
    //     fetchData()
    //         .then((data) => console.log(data))
    // },[])

    return (
        <div className='recommendedVideos'>
            <h2>Recommended</h2>
            <div className='recommendedVideos__videos'>
                <VideoCard />
            </div>
        </div>
    );
};

export default RecommendedVideos;