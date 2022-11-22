import YouTube  from 'react-youtube';
import React from 'react';
import { useParams } from 'react-router-dom';

const OneVideo = ({ video }) => {
    const {id} = useParams()
    return (
        <div>
            <YouTube 
            videoId={id}
            sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
            />
        </div>
    );
};

export default OneVideo;