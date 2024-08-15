import Awards from "@/components/AboutPage/Awards";
import CgCompanies from "@/components/AboutPage/CgCompanies";
import EmployeeTestimonial from "@/components/AboutPage/EmployeeTestimonial";
import HeroSection from "@/components/AboutPage/HeroSection";
import KeyPoints from "@/components/AboutPage/KeyPoints";
import Mission from "@/components/AboutPage/Mission";
import CtaBanner from "@/components/CtaBanner";
import { ctaBannerData } from "@/utils/cta-banner";
import React from "react";

const About = () => {
  return (
    <div>
      <HeroSection />
      <Mission />
      <EmployeeTestimonial />
      <KeyPoints />
      <Awards />
      <CgCompanies />
      <CtaBanner data={ctaBannerData[1]} />
    </div>
  );
};

export default About;


export async function generateMetadata({ params }) {
  return {
    title: "About Page",
    description:"",
    openGraph: {
      images: 'https://blink-digital.com/strapi/uploads/Microsoft_Teams_image_14_1d341190ec.png',
    },
  }
}