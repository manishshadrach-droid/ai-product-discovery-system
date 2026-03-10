"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function BeforeAfterSlider(){

const [showAfter,setShowAfter]=useState(false)

useEffect(()=>{

const interval=setInterval(()=>{
setShowAfter(prev=>!prev)
},3500)

return ()=>clearInterval(interval)

},[])

return(

<div className="relative h-[520px] w-full rounded-2xl overflow-hidden shadow-xl">

{/* BEFORE IMAGE */}

<Image
src="/before.jpg"
alt="Before"
fill
className={`object-cover transition-opacity duration-[1200ms] ${
showAfter ? "opacity-0 scale-105" : "opacity-100 scale-100"
}`}
/>

{/* AFTER IMAGE */}

<Image
src="/after.jpg"
alt="After"
fill
className={`object-cover transition-opacity duration-[1200ms] ${
showAfter ? "opacity-100 scale-100" : "opacity-0 scale-105"
}`}
/>


{/* Cinematic Overlay */}

<div className="absolute inset-0 bg-black/20"/>


{/* Transformation Label */}

<div className="absolute bottom-8 left-8 text-white">

<p className="text-sm tracking-widest uppercase mb-2 text-gray-200">
Transformation
</p>

<h3 className="text-3xl font-serif">
{showAfter ? "After Styling" : "Before Styling"}
</h3>

</div>


{/* Center Reveal Text */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">

<p className="text-white text-sm tracking-wider uppercase">
{showAfter ? "After" : "Before"}
</p>

</div>

</div>

</div>

)

}