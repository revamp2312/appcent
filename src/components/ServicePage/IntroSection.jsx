import Image from "next/image";
import React from "react";

const IntroSection = ({data}) => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-20">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12 laptop:flex-row">
        <div className="flex flex-col gap-2 items-start justify-center laptop:max-w-[612px] w-full">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
        <div className="w-full">
            <Image className="w-full" src={data.imgSrc} alt="Service-intro" width={612} height={380}/>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
