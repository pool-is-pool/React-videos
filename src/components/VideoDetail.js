import React from "react"

const VideoDetail = (props) => {
    if (!props.video) {
        return <div> Loading---</div>
    }

    const videoSRC = `https://www.youtube.com/embed/${props.video.id.videoId}` 

    return (        
        <div>
            <div class="ui embed">
                <iframe title="video player" src={videoSRC} />
            </div>
            <div class="ui segment">
                <h4 class="ui header">{props.video.snippet.title} </h4>
                {props.video.snippet.description}
            </div>
        </div>
    )
}

export default VideoDetail