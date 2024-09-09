import React from "react";
import VideoComponent from "../AboutPage/VideoComponent";

const VideoSection = ({data}) => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-6 tablet:gap-16">
            <div><h2>{data.title}</h2></div>
            <VideoComponent videoSrc={data.videoSrc} />
      </div>
    </div>
  );
};

export default VideoSection;
