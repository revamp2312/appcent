import Link from 'next/link'
import React from 'react'
import { PiArrowCircleRightFill } from 'react-icons/pi'

const BlogSlab = ({blogData}) => {
  return (
    <div className="flex justify-center items-center rounded-lg border-[1px] border-solid border-[#E8E7EE] w-full">
              <Link href={`/blog/${blogData?.attributes?.slug}`} className="w-full px-[30px] py-[28px] flex justify-between items-center ">
              <div className="flex flex-col gap-5 items-start justify-center w-full">
              <div className="flex justify-start items-center w-full">
                  <div className="text-sm text-[#5B616E]">May 20, 2019  •  2 min read</div>
                </div>
                <div className="flex justify-between items-center text-[var(--accent-color)] w-full">
                    <h4 className="font-semibold">{blogData?.attributes?.title}</h4>
                  
                    </div>
              </div>
              <div className="text-[var(--accent-color)] ">
              <PiArrowCircleRightFill size={40} />
              </div>
              </Link>
            </div>
  )
}

export default BlogSlab