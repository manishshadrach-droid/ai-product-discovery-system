"use client"

import Image from "next/image"

export default function BrandStory() {

return(

<section className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-20 items-center">

{/* Image */}

<div className="overflow-hidden rounded-2xl shadow-lg group">

<Image
src="/hero/hero-new.jpg"
alt="Craftsmanship"
width={800}
height={600}
className="object-cover transition duration-700 group-hover:scale-105"
/>

</div>


{/* Content */}

<div>

<div className="mb-6 h-[2px] w-16 bg-[#C6A969]"/>

<h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-8">
Crafted With Passion
</h2>

<p className="text-gray-600 mb-6 leading-relaxed text-lg">
At Woods & Grains, every décor piece is thoughtfully designed to bring warmth,
artistry, and elegance into modern living spaces. Our artisans combine
traditional craftsmanship with contemporary aesthetics to create pieces
that transform homes into inspiring environments.
</p>

<p className="text-gray-600 leading-relaxed text-lg">
Each product reflects attention to detail, quality materials, and a timeless
design philosophy that celebrates both heritage and modernity.
</p>

</div>

</section>

)

}