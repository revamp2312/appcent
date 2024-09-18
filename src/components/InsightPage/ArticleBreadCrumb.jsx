import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'

const ArticleBreadCrumb = () => {
  return (
    <div className="flex gap-1 justify-center items-center">
    <Link href={"/insight"}>
      <h6 className="text-xs tablet:text-base text-nowrap text-[var(--text-color)]">Customer Stories</h6>
    </Link>
    <RiArrowRightSLine />
    <h6 className="text-xs tablet:text-base block laptop:hidden">
      {truncate(blogData?.data?.attributes?.title, {
        length: 24,
        omission: "...",
      })}
    </h6>
    <h6 className="text-xs tablet:text-base hidden laptop:block">
      {blogData?.data?.attributes?.title}
    </h6>
  </div>
  )
}

export default ArticleBreadCrumb