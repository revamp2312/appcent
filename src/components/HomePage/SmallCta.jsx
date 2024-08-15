import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const SmallCta = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-[var(--primary-color)] px-12 py-8 w-full">
        <div className="flex flex-col gap-2 justify-center items-center">
            <div><h3>Discover the Difference</h3></div>
            <div><p>Unlock Your Business Potential: Schedule a Consultation with Our SAP Experts Today!</p></div>
        </div>
        <div>
        <Link href="/">
                <div className="flex justify-center items-center gap-[10px] rounded px-6 py-3 bg-primary-btn-bg text-white font-bold">
                  <div>Schedule a Consultation</div>
                  <FaArrowRightLong />
                </div>
              </Link>
        </div>
    </div>
  )
}

export default SmallCta