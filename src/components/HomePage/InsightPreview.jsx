import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import InsightPreviewCarousel from './InsightPreviewCarousel'

const InsightPreview = ({blogData}) => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12 laptop:py-20">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col gap-16 justify-center items-center w-full">
                <div className="flex flex-col gap-2 justify-center items-center text-center">
                    <div><h2>Insights and Innovations: The Appcentric Advantage</h2></div>
                    <div><p>Explore the Latest in SAP Solutions, Success Stories, and Technological Breakthroughs</p></div>
                </div>
                <div className="w-full">
                    <InsightPreviewCarousel blogData={blogData} />
                </div>
            </div>
            <div>
            <Link href="/insight">
          <div className="flex justify-center items-center gap-[10px] rounded px-6 py-3  border-[1px] border-solid border-[var(--accent-color)] text-[var(--accent-color)] font-bold">
          <div >View all insights</div>
          <FaArrowRightLong />
          </div></Link>
            </div>
        </div>
    </div>
  )
}

export default InsightPreview