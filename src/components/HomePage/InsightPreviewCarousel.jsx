"use client";
import { insightDummyData } from "@/utils/insightDummyData";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./InsightPreviewCarousel.css";

import Image from "next/image";
const InsightPreviewCarousel = () => {
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
          {insightDummyData.map((eachInsight, index) => {
            return (
              <div className="embla__slide w-[392px]" key={index}>
                <Image
                  key={index}
                  className="embla__slide__img object-cover h-[220px]"
                  src={eachInsight.imgSrc}
                  alt="Logo"
                  width={392}
                  height={220}
                />
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
                      Alfamart Pilots Agility and Resilience Across its People,
                      Process, and Technology
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InsightPreviewCarousel;
