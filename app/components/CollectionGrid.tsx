"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
"/featured-bg/luxury1.jpg",
"/featured-bg/luxury2.jpg",
"/featured-bg/luxury3.jpg",
"/featured-bg/luxury4.jpg"
]

export default function CollectionGrid(){

const [current,setCurrent] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{
setCurrent(prev => (prev + 1) % slides.length)
},5000)

return ()=>clearInterval(interval)

},[])

return(

<section className="max-w-7xl mx-auto px-8 py-24">

<h2 className="text-4xl font-serif text-center mb-16">
Explore Collections
</h2>

<div className="relative w-full flex justify-center">

<div className="relative w-full max-w-[900px] aspect-[3/4] overflow-hidden rounded-xl bg-[#f5f5f5]">

{slides.map((slide,i)=>(
<Image
key={i}
src={slide}
alt="Luxury Collection"
fill
priority
className={`object-contain transition-opacity duration-[2000ms] ${
i===current ? "opacity-100" : "opacity-0"
}`}
/>
))}

</div>

</div>

</section>

)

}