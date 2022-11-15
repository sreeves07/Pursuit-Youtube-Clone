import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import RecommendedVideos from './Components/RecommendedVideos';
import './App.css';


//https://www.youtube.com/watch?v=_nBlN9yp9R8
//https://www.youtube.com/_nBlN9yp9R8

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
      
    </div>
  );
}

export default App;
