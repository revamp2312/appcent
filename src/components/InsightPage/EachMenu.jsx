import React from 'react'

const EachMenu = ({categoryName,setMenuSelected,menuSelected}) => {
  return (
    <div className="relative" onClick={()=>{setMenuSelected(categoryName)}}>
      <p className={` ${menuSelected===categoryName?"text-[var(--accent-color)]":"text-[#667085]"}  font-medium cursor-pointer`}>{categoryName}</p>
      {menuSelected===categoryName &&<div className="absolute rounded-t -bottom-4 h-1 w-full bg-[var(--accent-color)]"></div>}
    </div>
  )
}

export default EachMenu