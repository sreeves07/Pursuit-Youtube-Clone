import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RelatedVideos = () => {
    let { id } = useParams()
    const [relatedVideos, setRelatedVideos] = useState([])

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?id=${id}&relatedToVideoId=${id}&type=video&part=snippet&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
            .then((res) => res.json())
            .then((res) => {
                setRelatedVideos(res.items)
            })
            .catch((err) => {
                console.log(err)
            })
    },[id])
    return (
        <div>
            {relatedVideos?.length > 0 && relatedVideos.map((video) => {
                return (
                    <ul>
                        <li key={id}>
                            <img src={video.snippet.thumbnails.medium.url} alt={id}></img>
                            <Link to={`/videos/${video.id.videoId}`}>
                                <h3>{video?.snippet?.title}</h3>
                            </Link>
                            
                        </li>
                    </ul>
                )
            })}
        </div>
    );
};

export default RelatedVideos;