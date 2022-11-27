import React from 'react';

import {BrowserRouter as Routes} from 'react-router-dom'

import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar'

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