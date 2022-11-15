import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Header from './Components/Header';
import About from './Landing Pages/About';
import Home from './Landing Pages/Home';
import VideoCard from './Components/VideoCard';
import Sidebar from './Components/Sidebar'
import RecommendedVideos from './Components/RecommendedVideos';
import './App.css';

function App() {
  const [searchInput, setSearchInput] = useState('')


  return (
    <div className="App">
      {/* <Router> */}
      <Header />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos/:id" element={<VideoCard searchInput={searchInput}/>} />
        <Route path="/videos" element={<RecommendedVideos />} />
        
      </Routes> */}
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>

      {/* </Router> */}
    </div>
  );
}

export default App;
