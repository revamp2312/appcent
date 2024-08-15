"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./ClientCarousel.css";
import { clientLogos } from "@/utils/clientLogos";
import Image from "next/image";

const EmblaCarousel = () => {
  const OPTIONS = { loop: true };
console.log("component rendered");
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    AutoScroll({ playOnInit: true, speed: 1,stopOnInteraction:false,stopOnMouseEnter:true }),
  ]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    autoScroll.play();
  }, []);

  return (
    <div id="ClientCarousel-Section" className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {clientLogos.map((eachLogo, index) => {
            return (
              <Image
                key={index}
                src={eachLogo.logoSrc}
                alt="Logo"
                width={150}
                height={64}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
