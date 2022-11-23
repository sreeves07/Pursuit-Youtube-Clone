import React from "react"
import { Link } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css"

const VideoCard = ({ video }) => {

    return ( 
        <div className="videoCard">
            <Link to={`/videos/${video.id.videoId}`}>
            <img className="videoCard__thumbnail" alt={video.snippet.title} src={video.snippet.thumbnails.high.url}></img>
            <div className="videoCard__info">
                <Avatar 
                    className="videoCard__avatar"
                    alt={video.snippet.channelTitle}
                    src={video.snippet.thumbnails.medium.url}
                />
                <div className="videoCard__text">
                    <h4>{video.snippet.title}</h4>
                    <p>{video.channelTitle}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default VideoCard