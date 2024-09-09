"use client"

import { useState} from "react";


export default function useInsightData(){
    const [menuSelected,setMenuSelected] =useState("Blogs")

    return {menuSelected,setMenuSelected}


}