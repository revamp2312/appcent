"use client"

import { useState } from "react"

export const useSideBar=()=>{
    const [openSideBar,setOpenSideBar]=useState(false)

    return {openSideBar,setOpenSideBar}
}