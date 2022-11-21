import {BrowserRouter as Router,Routes, Route, } from 'react-router-dom'
import { useState } from 'react';
import Header from './Components/Header';
import About from './Landing Pages/About';
import VideoCard from './Components/VideoCard';
import Sidebar from './Components/Sidebar'
import RecommendedVideos from './Components/RecommendedVideos';
import './App.css';
import { fetchData } from './Fetch';

function App() {
  const [searchBox, setSearchBox] = useState("")
  const [searchedVideos, setSearchedVideos] = useState([])


  const handleUserSearch = (e) => {
    e.preventDefault()
    fetchData(searchBox)
      .then((data) => {
        setSearchedVideos(data.items)
      })
      .catch((err) => {
        console.log(err)
      })
      
  }

  const handleUserTextChange = (e) => {
    setSearchBox(e.target.value)
  }

  
  return (
    <div className="App">
      <Router>
      <Header  handleUserSearch={handleUserSearch} handleUserTextChange={handleUserTextChange} searchBox={searchBox}/>
      <div className="app__page">
        <Sidebar />
        <Routes>
          <Route path="/" element={<RecommendedVideos searchedVideos={searchedVideos}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<VideoCard />} />
          <Route path="/videos" element={<RecommendedVideos />} />
        </Routes>
      </div>

      </Router>
    </div>
  );
}

export default App;
