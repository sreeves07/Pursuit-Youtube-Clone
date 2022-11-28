import {BrowserRouter as Router,Routes, Route, } from 'react-router-dom'
import { useState } from 'react';
import Header from './Components/Header';
import About from './Landing Pages/About';
import Sidebar from './Components/Sidebar'
import SearchResults from './Components/SearchResults';
import './App.css';
import { fetchData } from './Fetch';
import ErrorMessage from './Components/ErrorMessage';
import OneVideo from './Components/OneVideo';

function App() {
  const [searchBox, setSearchBox] = useState("")
  // const [errorModal, setErrorModal] = useState(false)
  const [searchedVideos, setSearchedVideos] = useState([])

  // const handleClose = () => setErrorModal(false);

  const handleUserSearch = (e) => {
    e.preventDefault()
    fetchData(searchBox)
      .then((data) => {
        setSearchBox("")
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
      <Header handleUserSearch={handleUserSearch} handleUserTextChange={handleUserTextChange} searchBox={searchBox}/>
      <div className="app__page">
        <Sidebar />
        <Routes>
          <Route path="/" element={<SearchResults searchedVideos={searchedVideos}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<OneVideo />} />
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </div>

      </Router>
    </div>
  );
}

export default App;
