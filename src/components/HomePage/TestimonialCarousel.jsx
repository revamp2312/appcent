"use client";

import useEmblaCarousel from "embla-carousel-react";
import "./TestimonialCarousel.css";
import { FirstSlide, SecondSlide } from "./TestimonialSlides";
const TestimonialCarousel = () => {
  const OPTIONS = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const GotoNextSlide = () => {
    emblaApi.scrollNext();
  };
  const GotoPrevSlide = () => {
    emblaApi.scrollPrev();
  };
  return (
    <section id="testimonial-Section" className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <FirstSlide gotoNextSlide={GotoNextSlide} />
          </div>
          <div className="embla__slide">
            <SecondSlide gotoPrevSlide={GotoPrevSlide} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
