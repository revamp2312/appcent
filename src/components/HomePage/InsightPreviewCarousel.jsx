"use client";
import { insightDummyData } from "@/utils/insightDummyData";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./InsightPreviewCarousel.css";

import Image from "next/image";
import Link from "next/link";
const InsightPreviewCarousel = ({blogData}) => {
  console.log(blogData);
  
  const OPTIONS = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    AutoScroll({
      playOnInit: true,
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    autoScroll.play();
  }, []);

  return (
    <div id="InsightPreview-Section" className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {blogData?.data.map((eachInsight, index) => {
            return (
              <Link  key={index} href={`/blog/${eachInsight?.attributes.slug}`}>
            
              <div className="embla__slide w-[392px] h-full">
                <div className="h-[218px] laptop:h-[279px]  w-full">
                <Image
                  key={index}
                  className="embla__slide__img h-full w-full object-cover rounded-t"
                  src={"http://127.0.0.1:1337"+eachInsight?.attributes?.imgSrc?.data?.attributes?.url}
                  alt="Logo"
                  width={392}
                  height={220}
                />
                </div>
           
                <div className="flex flex-col gap-4 p-6 border-[1px] border-solid border-[#E8E7EE] rounded-t-none rounded-b-[4px] ">
                  <div className="flex justify-between items-center">
                    <div>
                      <h6 className="text-[#767676]">October 25, 2021</h6>
                    </div>
                    <div>
                      <h6 className="text-[#767676]">10 MIN TO READ</h6>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">
                   {eachInsight?.attributes?.title}
                    </h4>
                  </div>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  
  );
};

export default InsightPreviewCarousel;
