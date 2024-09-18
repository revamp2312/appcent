"use client";

import React from "react";
import { CgQuote } from "react-icons/cg";
import useEmblaCarousel from "embla-carousel-react";
import { employeetestimonialData } from "@/utils/employeetestimonialData";
import "./EmployeeTestimonialCarousel.css";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState, useCallback, useEffect } from "react";
const EmployeeTestimonialCarousel = () => {
  const OPTIONS = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="employee-testimonial-Section" className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {employeetestimonialData.map((each, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex justify-center items-center p-6 laptop:p-12 bg-white min-h-[298px] rounded">
                <div className="flex flex-col gap-6 justify-center items-start">
                  <div className="flex flex-col gap-2 justify-center items-start">
                    <Image
                      src="/EmployeeTestimonials/feeedbackVector.png"
                      alt="Vector"
                      width={24}
                      height={24}
                    />
                    <div>
                      <p>{each.feedback}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="font-semibold">{each.feedbackGIver}</p>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <div
                        style={
                          prevBtnDisabled
                            ? { color: "#EFEFEF" }
                            : { color: "#EC622B" }
                        }
                        className="border-[1px] border-solid border-[#EFEFEF] p-2 cursor-pointer"
                        onClick={onPrevButtonClick}
                      >
                        <MdOutlineKeyboardArrowLeft size={24} />
                      </div>
                      <div
                        style={
                          nextBtnDisabled
                            ? { color: "#EFEFEF" }
                            : { color: "#EC622B" }
                        }
                        className="border-[1px] border-solid border-[#EFEFEF] p-2 cursor-pointer"
                        onClick={onNextButtonClick}
                      >
                        <MdOutlineKeyboardArrowRight size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeTestimonialCarousel;
