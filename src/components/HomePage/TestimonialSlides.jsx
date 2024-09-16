import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go"
import { MdKeyboardArrowRight } from "react-icons/md"
import { VscQuote } from "react-icons/vsc"
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
export const FirstSlide=({gotoNextSlide})=>{
    return(
        <div className="flex flex-col laptop:flex-row gap-6 justify-center items-center bg-[var(--primary-color)] tablet:p-6  rounded-lg laptop:p-12 w-full">
        <div className="w-full laptop:max-w-[450px]  hidden tablet:block tablet:h-[300px] laptop:h-full">
            <Image className="w-full h-full" style={{objectFit:"cover",objectPosition:"top"}} src="/testimonial/Testimonial1.png" alt="Testimonial iamge" width={450} height={300} />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center p-6  laptop:p-12 text-[var(--accent-color)] bg-testimonialBg laptop:bg-white w-full rounded border-[0.7px] border-solid border-white">
            <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex justify-between items-center w-full">
                <div><VscQuote size={40} /></div>
                <div onClick={gotoNextSlide} className="flex justify-center items-center p-2 bg-[var(--primary-color)] cursor-pointer rounded"><MdKeyboardArrowRight size={24} /></div>
            </div>
            <div className="flex flex-col gap-8 justify-center items-start">
                <div><p className="font-semibold">Appcentric is one of the top IT solutions providers in the Philippines. Alfamart, like many of Appcentric’s clients, has chosen to partner with them because of the quality of the service that they offer. They are flexible and are committed to their partners. We are particular with things like data cleansing, project management, and cost, which they delivered based on our requirement. Appcentric’s management team is very hands-on and pay keen attention to our requirements.</p></div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="font-semibold">Lerry Sangalang</p>
                    <p>AVP – Information Technology at Alfamart Trading Philippines</p>
                  </div>
            </div>
            </div>
            
          <Link href="blog/alfamart-pilots-agility-and-resilience-across-its-people-process-and-technology" className="flex gap-2 justify-start items-center w-full">
          <div className="flex gap-2 justify-start items-center w-full">
                <h6 className="font-bold">Read Customer Success Story</h6>
                    <GoArrowUpRight />
                </div>
          </Link>
   
        </div>
  </div>
    )
}

export const SecondSlide=({gotoPrevSlide})=>{
    return(
        <div className="flex flex-col laptop:flex-row gap-6 justify-center items-center bg-[var(--primary-color)] rounded-lg  tablet:p-6  laptop:p-12 w-full">
        <div  className="w-full max-w-[450px]  hidden tablet:block tablet:h-[300px] laptop:h-full">
            <Image  className="w-full" src="/testimonial/Testimonial2.png" style={{objectFit:"cover",objectPosition:"top"}}   alt="Testimonial iamge" width={450} height={524} />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center p-6 laptop:p-12 text-[var(--accent-color)] bg-white w-full rounded ">
            <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex justify-between items-center w-full">
                <div><VscQuote size={40} /></div>
                <div onClick={gotoPrevSlide} className="flex justify-center items-center p-2 bg-[var(--primary-color)] cursor-pointer rounded rotate-180"><MdKeyboardArrowRight size={24} /></div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-start">
               <div><h3>Conversations with LBC on their SAP Journey</h3></div>
               <div><p className="font-semibold">The kind of service that Appcentric Solutions Inc. has provided LBC with is very customer-focused. They really look at the needs of the client and not just for the sake of selling something that the client doesn’t need. It is all about customer partnership. They really dig into the details of a project to discover what’s necessary.</p></div>
            </div>
            </div>
            
          
            <div className="flex gap-2 justify-start items-center w-full">
                <h6 className="font-bold">Read Customer Success Story</h6>
                    <GoArrowUpRight />
                </div>
        </div>
  </div>
    )
}