import YouTube from 'react-youtube';

import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AdModal from './AdModal.js';
import Button from '@mui/material/Button';


import "./OneVideo.css"
import RelatedVideos from './RelatedVideos.js';

const OneVideo = () => {
    const {id} = useParams()
    const [open, setOpen] = useState(false);
    const [video, setVideo] = useState({})
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({
        name:"",
        comment:""
    })
    

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    }
    
    const handleTextChange = (e) => {
        setComment({...comment, [e.target.id]:e.target.value})
    }

    const handleComment = (e) => {
        e.preventDefault()
        setComments([...comments, comment])
        setComment({name: "",comment: ""})
    }

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_YOUTUBE_KEY}&part=snippet,player`)
            .then((res) => res.json())
            .then((res) => {
                setVideo(res.items[0])
                console.log(res.items[0])
            })
            .catch((err) => {console.log(err)})
    },[id])
    return (
        <div className='video'>
            <div className='videoWrapper'>
            <h1>{video?.snippet?.title}</h1>
            <YouTube 
            videoId={id}
            opts={opts}
            sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
            />
                   <div className='video__comments'>
                <h4>Add a comment</h4>
                <form onSubmit={handleComment}>
                    <label htmlFor='name'>Name: </label>
                    <input 
                        type="text"
                        id="name"
                        onChange={handleTextChange}
                    />
                    <br></br>
                    <label htmlFor='comment'>Comment: </label>
                    <input 
                        type="text"
                        id="comment"
                        onChange={handleTextChange}
                    />
                    <br></br>
                    <input type="submit"></input>
                </form>
                <hr></hr>
                <ul>
                    {comments.map((element) => {
                        return (
                            <li key={id}>
                                {element.name}: {element.comment}
                            </li>
                        )
                    })}
                </ul>
            </div>
            </div>
            <hr></hr>
            <div>
      <Button onClick={handleOpen}>Interested In Starting A Career In Tech?</Button>
      <AdModal handleClose={handleClose} open={open} />
      <RelatedVideos />
     
    </div>
        </div>

    );
};

export default OneVideo;