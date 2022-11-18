import React from "react"
import Avatar from "@material-ui/core/Avatar"



const VideoCard = ({ video }) => {

    console.log(video)
    return ( 
        <article className="video">
            {/* <h1>test</h1> */}
      <h3>
        {video.snippet.title}
      </h3>
      <p className="description">{video.snippet.description}</p>
    </article>
    )
}

export default VideoCard