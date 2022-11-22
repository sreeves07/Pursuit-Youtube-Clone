import React from "react"
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    return ( 
        <div>
            <Link to={`/videos/${video.id.videoId}`}>
            <img alt={video.snippet.title} src={video.snippet.thumbnails.high.url}></img>
            <h3>{video.snippet.title}</h3>
            </Link>
        </div>
    )
}

export default VideoCard