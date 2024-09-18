import React from 'react'

const VideoComponent = ({videoSrc}) => {
  return (
    <div className="w-full max-w-[1200px] h-[190px] tablet:h-[331px] laptop:h-[544px] max-h-[544px] ">
        <iframe style={{borderRadius:"4px"}} width="100%" height="100%" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoComponent