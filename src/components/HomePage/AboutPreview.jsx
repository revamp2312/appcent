import Image from "next/image"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
const AboutPreview = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-[70px] py-12 bg-[var(--primary-color)]">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <div>
            <Image src="/homepage/aboutPreview.png" alt="About-Preview" width={1440} height={230}/>
        </div>
        <div className="flex gap-6 justify-center items-start">
            <div className="flex flex-1"><h2>Elevating Enterprises,
            Shaping Futures: Our Journey of Excellence and Innovation</h2></div>
            <div className="flex flex-col gap-12 items-start justify-center flex-1">
                <div><p>At Appcentric Solutions Inc., we transcend traditional boundaries to become your pivotal partner in navigating business growth and operational excellence. Celebrating a legacy of 17 years, we have firmly established ourselves as leaders in technological innovation and business transformation, committed to elevating businesses across the Philippines and beyond into the realm of unprecedented success.</p></div>
                <Link href="/about">
          <div className="flex justify-center items-center gap-[10px] rounded px-6 py-3 bg-[var(--primary-color)] border-[1px] border-solid border-[var(--accent-color)] text-[var(--accent-color)] font-bold">
          <div >See Our SAP Services </div>
          <FaArrowRightLong />
          </div></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPreview