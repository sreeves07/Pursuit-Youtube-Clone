import React from 'react';

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import About from './About';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar'
import VideoCard from '../Components/VideoCard';
import RecommendedVideos from '../Components/RecommendedVideos';
import "../App.css";

const Home = () => {
    return (
        <div className="App">
        <Header />
        <div className="app__page">
          <Sidebar />
          <Routes>
            <RecommendedVideos />
          </Routes>
        </div>
        
      </div>
    );
};

export default Home;