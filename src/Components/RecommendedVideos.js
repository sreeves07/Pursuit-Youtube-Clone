import React from 'react';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard'
import './RecommendedVideos.css'

const RecommendedVideos = ({ searchInput, setSearchInput, searchedVideos }) => {
    // console.log(searchInput)
    // useEffect(() => {
    //     fetchData()
    //         .then((data) => console.log(data))
    // },[])
    console.log('Searched Videos State in RV comp: ',searchedVideos)

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