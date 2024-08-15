import React from 'react'

const EachMenu = ({categoryName}) => {
  return (
    <div onClick={()=>{setMenuSelected("all")}}><p className="text-[#667085] font-medium cursor-pointer">{categoryName}</p></div>
  )
}

export default EachMenu