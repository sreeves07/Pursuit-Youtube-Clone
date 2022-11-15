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
  
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<RecommendedVideos />} />
          <Route path="/videos/:id" element={<VideoCard />} />
        </Routes> */}
        <div className="app__page">
          <Sidebar />
          <RecommendedVideos />
        </div>
        
      </div>
    );
};

export default Home;