import React from 'react'

const EachMenu = ({categoryName,setMenuSelected,menuSelected}) => {
  return (
    <div onClick={()=>{setMenuSelected(categoryName)}}><p className={` ${menuSelected===categoryName?"text-[var(--accent-color)]":"text-[#667085]"}  font-medium cursor-pointer`}>{categoryName}</p></div>
  )
}

export default EachMenu