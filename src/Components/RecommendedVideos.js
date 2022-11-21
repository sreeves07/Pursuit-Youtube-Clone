import React from 'react';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard'
import './RecommendedVideos.css'
import { ShowChartSharp } from '@material-ui/icons';

const RecommendedVideos = ({ searchInput, setSearchInput, searchedVideos, snowboardSearchedVideos }) => {
    // console.log(searchInput)
    // useEffect(() => {
    //     fetchData()
    //         .then((data) => console.log(data))
    // },[])
    console.log('Searched Videos State in RV comp: ',searchedVideos)
    console.log('Snowboard Searched Videos State in RV comp: ',snowboardSearchedVideos)

    const show1 = snowboardSearchedVideos[0].snippet
    const show1Title = snowboardSearchedVideos[0].snippet.title
    const show1Desc = snowboardSearchedVideos[0].snippet.description
    console.log('show1 object:  ', show1 )
    console.log('show1 title: ', show1Title )
    console.log('show1 description: ', show1Desc )
    let uuid = crypto.randomUUID();

    


    return (
        <div className='recommendedVideos'>
            <h2>Snowboard search results</h2>
            <div className='recommendedVideos__videos'>
                { snowboardSearchedVideos.map((video) => {
                    return <VideoCard video={video} key={uuid} />

                })}
                {/* <VideoCard /> */}
            </div>
        </div>
    );
};

export default RecommendedVideos;