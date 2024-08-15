import TestimonialCarousel from "./TestimonialCarousel"

const TestimonialSection = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-[70px] py-12  bg-primary-btn-bg">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
          <div className="flex justify-between items-center" >
            <div><h2 className="text-white">Transformations Realized: Our Customers&apos; Success Stories</h2></div>
            <div><h5 className="text-white">Discover How Appcentric Elevates Businesses with Tailored SAP Solutions and Expertise</h5></div>
          </div>
          <TestimonialCarousel />
        </div>
        </div>
  )
}

export default TestimonialSection