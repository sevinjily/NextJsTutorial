"use client";
import { useState } from "react";
export const metadata={
    title:"Counter",
}

export const Counter =()=>{
    const [count,setCount]=useState(0);
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}