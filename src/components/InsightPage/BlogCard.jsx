import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blogdata }) => {
  const imgurl = blogdata?.attributes?.imgSrc?.data?.attributes?.url;
  const slug=blogdata?.attributes.slug


  return (
    <div className="flex justify-center items-center w-full h-full ">
      <Link href={`/blog/${slug}`} className="w-full h-full">
        <div className="flex flex-col  justify-start  items-center h-full  w-full border-[1px] border-[#E8E7EE] rounded-lg ">
          <div className="h-[218px] laptop:h-[279px]  w-full">
            <Image
              className="h-full w-full object-cover rounded-t"
              src={"http://127.0.0.1:1337" + imgurl}
              alt="insightImg"
              width={399}
              height={297}
            />
          </div>
    
          <div className="flex gap-4 flex-col justify-start items-start px-6 py-5 w-full">
            <h4>{blogdata?.attributes?.title}</h4>
            <div className="flex  h-[1px] w-full bg-[#E8E7EE]"></div>
            <div className="flex justify-between items-center w-full">
              <div className="text-sm text-[#5B616E]">May 16, 2019</div>
              <div className="text-sm text-[#5B616E]">8 min read</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
