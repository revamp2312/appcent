import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import { truncate } from "lodash";
import CtaBanner from "@/components/CtaBanner";
import { ctaBannerData } from "@/utils/cta-banner";



export async function getBlog(slug) {
  try {
    const res = await fetch(`http://localhost:1337/api/blogs/${slug}`);
    const repo = await res.json();
    console.log(repo);

    return repo;
  } catch (err) {
    console.log(err);
  }
}

const page = async ({ params }) => {
  const blogData = await getBlog(params?.slug);
  const imgurl =
    "http://127.0.0.1:1337" +
    blogData?.data?.attributes?.imgSrc?.data?.attributes?.url;
  const description = blogData?.data?.attributes?.description;

  return (
    <>
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col gap-4 justify-center items-center">
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
          <div className="flex justify-center items-center text-center">
            <h2>{blogData?.data?.attributes?.title}</h2>
          </div>
          <div>
            <p className="text-center">
              {blogData?.data?.attributes?.DateInText} by Appcentric Solutions,
              Inc.
            </p>
          </div>
        </div>
        <div className="max-w-[1248px] w-full  h-full">
          <Image
            className="w-full max-h-[500px] object-cover rounded"
            objectFit="cover"
            src={imgurl}
            alt="Blog-img"
            width={1248}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-4 max-w-[718px] w-full">
          {description.map((eachPara, index) => {
            return <p key={index}>{eachPara?.children[0]?.text}</p>;
          })}
        </div>
      </div>
    </div>
    <CtaBanner data={ctaBannerData[0]} />
    </>
  );
};

export default page;


export async function generateMetadata({ params }) {
console.log("params",params);
const blogData = await getBlog(params?.slug);
const imgurl =
  "http://127.0.0.1:1337" +
  blogData?.data?.attributes?.imgSrc?.data?.attributes?.url;
  const title= blogData?.data?.attributes?.title;

  
  return {
    title: title,
    openGraph: {
      images: imgurl,
    },

  }
}