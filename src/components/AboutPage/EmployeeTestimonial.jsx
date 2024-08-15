import React from "react";
import EmployeeTestimonialCarousel from "./EmployeeTestimonialCarousel";
import Image from "next/image";

const EmployeeTestimonial = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-[70px] py-12 bg-[var(--primary-color)]">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col gap-2 justify-center items-center">
            <div><h6>WORKFORCE STORIES</h6></div>
            <div><h2>Stories of Success and Growth</h2></div>
        </div>
        <div className="flex justify-center items-center">
            <div className="-mr-12 z-20"><EmployeeTestimonialCarousel /></div>
            <div className="z-10">
                <Image src="/EmployeeTestimonials/EmployeeTestimonialImg.png" alt="EmployeeTestimonialImg" width={612} height={404} />
            </div>
        </div>

      </div>
    </div>
  );
};

export default EmployeeTestimonial;
