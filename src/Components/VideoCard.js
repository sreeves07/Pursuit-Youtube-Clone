import React from "react"
import Avatar from "@material-ui/core/Avatar"



const VideoCard = ({ video }) => {

    console.log(video)
    console.log(video.snippet.title,': ',video.snippet.thumbnails.default)
    return ( 
        <article className="video">
            {/* <h1>test</h1> */}
      <h3>
        {video.snippet.title}
      </h3>
      <p className="description">{video.snippet.description}</p>
      <img alt={video.snippet.title} src={video.snippet.thumbnails.high.url}></img>
    </article>
    )
}

export default VideoCard