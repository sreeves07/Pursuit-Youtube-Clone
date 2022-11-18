import {BrowserRouter as Router,Routes, Route, } from 'react-router-dom'
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
  const [searched, setSearched] = useState(false)
  const [searchedVideos, setSearchedVideos] = useState({})

  const handleUserSearch = (e) => {
    setSearched(true)
    e.preventDefault()
    setSearchBox(e.target.value)
    console.log('search submission: ',{searchBox})
  }

  const handleUserTextChange = (e) => {
    e.preventDefault()
    setSearchBox(e.target.value)
    console.log('search change: ',{searchBox})
  }

    useEffect(() => {
        if(searched) {
          setSearched(false)
            fetchData(searchBox)
                .then((res) => {
                    console.log('our .then is working')
                    setSearchedVideos(res)
                    // setSearchedVideos(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
  

  console.log(fetchData())
  const [searchInput, setSearchInput] = useState('')
  // console.log('Search: ', searchedVideos)

  console.log(searchedVideos)
  return (
    <div className="App">
      <Router>
      <Header setSearchInput={setSearchInput} searchBox={searchBox} handleUserSearch={handleUserSearch} handleUserTextChange={handleUserTextChange}/>
      <div className="app__page">
        <Sidebar />
        <Routes>
        <Route path="/" element={<RecommendedVideos searchedVideos={searchedVideos}  searchInput={searchInput} setSearchInput={setSearchInput}/>} />
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
