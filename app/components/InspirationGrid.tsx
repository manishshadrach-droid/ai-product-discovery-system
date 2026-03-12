"use client"

import Image from "next/image"

export default function InspirationGrid(){

const images=[
"/inspiration/insp1.jpg",
"/inspiration/insp2.jpg",
"/inspiration/insp3.jpg",
"/inspiration/insp4.jpg",
"/inspiration/insp5.jpg",
"/inspiration/insp6.jpg"
]

return(

<section className="max-w-7xl mx-auto px-8 py-32">

{/* Section Header */}

<div className="text-center mb-20">

<h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-4">
Design Inspiration
</h2>

<p className="text-gray-600 max-w-xl mx-auto text-lg">
Explore curated interiors styled with Woods and Grains décor pieces.
</p>

</div>


{/* Inspiration Grid */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

{images.map((img,i)=>(

<div
key={i}
className="relative w-full h-[360px] rounded-2xl overflow-hidden group cursor-pointer"
>

<Image
src={img}
alt="Decor inspiration"
fill
sizes="(max-width:768px) 100vw, 33vw"
className="object-cover transition duration-700 group-hover:scale-110"
/>


{/* Overlay */}

<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"/>


{/* Hover Label */}

<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">

<p className="text-sm tracking-widest uppercase text-gray-200">
Inspiration
</p>

<h3 className="text-lg font-semibold">
Styled Interior
</h3>

</div>

</div>

))}

</div>

</section>

)

}