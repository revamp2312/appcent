"use client"

import { useState} from "react";


export default function useInsightData(){
    const [menuSelected,setMenuSelected] =useState("blogs")

    return {menuSelected,setMenuSelected}


}