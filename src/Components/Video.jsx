import React from 'react';

function Video(props) {
    
    return (
        <div className="video-player">
            <img class="img-responsive" alt={props.altImage} src={props.youtubePreviewImage} />
            <iframe width={props.width} height={props.height} src={props.videoUrl} frameborder="0" allowfullscreen></iframe>
            
        </div>
    );
}

export default Video;