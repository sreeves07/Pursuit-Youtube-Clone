import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import About from './Landing Pages/About';
import Home from './Landing Pages/Home';
import VideoCard from './Components/VideoCard';
import Sidebar from './Components/Sidebar'
import RecommendedVideos from './Components/RecommendedVideos';
import './App.css';
import { fetchData } from './Fetch';

function App() {
  const [searchBox, setSearchBox] = useState("")

  const handleUserSearch = (e) => {
    e.preventDefault()
    setSearchBox(e.target.value)
    console.log('search submission: ',{searchBox})
  }

    useEffect(() => {
        if(searchBox) {
            fetchData(searchBox)
                .then((res) => {
                    setSearchInput(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
  

  console.log(fetchData())
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="App">
      <Router>
      <Header setSearchInput={setSearchInput} />
      <div className="app__page">
        <Sidebar />
        <Routes>
        <Route path="/" element={<RecommendedVideos/>} />
        <Route path="/about" element={<About />} />
        <Route path="/videos/:id" element={<VideoCard searchInput={searchInput}/>} />
        <Route path="/videos" element={<RecommendedVideos />} />
        </Routes>
      </div>

      </Router>
    </div>
  );
}

export default App;
