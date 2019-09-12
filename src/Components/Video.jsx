import React from 'react';

function Video(props) {
    
    return (
        <div className="video-player">
            {/* <img class="img-responsive" alt={props.altImage} src={props.youtubePreviewImage} /> */}
            <iframe width={props.width || 300} title={props.altImage} height={props.height || 300} src={props.videoUrl} frameborder="0" allowfullscreen></iframe>
        </div>
    );
}

export default Video;