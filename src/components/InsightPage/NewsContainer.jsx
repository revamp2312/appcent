import React from 'react'
import BlogCard from './BlogCard';



const NewsContainer = ({newsData}) => {

  return (
    <div className="flex justify-center items-center m-auto w-full">
    <div className="grid grid-cols-3 gap-x-6 gap-y-16 place-content-center ">
      {newsData.data.map((eachData, index) => {
        return <BlogCard key={index} blogdata={eachData} />;
      })}
    </div>
  </div>
  )
}

export default NewsContainer