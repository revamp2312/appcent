import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-[70px] py-20">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2>Our Mission</h2>
          </div>
          <div className="max-w-[612px]">
            <p>
              As a pioneer in the field of enterprise solutions, our mission is
              to empower organizations across the Philippines and beyond with
              innovative tools and strategies that enhance efficiency,
              intelligence, and operational excellence.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/homepage/aboutPreview.png"
            alt="About-Preview"
            width={1440}
            height={230}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <h2>Core Values</h2>
          </div>
          <div className="max-w-[612px]">
            <p>
              At Appcentric, we believe in the power of partnership and
              innovation. Our core values are embedded in every solution we
              provide, ensuring that each client receives tailored services that
              not only meet but exceed expectations. We are committed to helping
              businesses navigate the complexities of the digital landscape,
              transforming challenges into opportunities for growth and
              innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
