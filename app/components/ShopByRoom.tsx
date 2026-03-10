"use client"

import Image from "next/image"
import Link from "next/link"

export default function ShopByRoom(){

const rooms=[

{
name:"Living Room",
image:"/rooms/living.jpg"
},

{
name:"Dining Room",
image:"/rooms/dining.jpg"
},

{
name:"Bedroom",
image:"/rooms/bedroom.jpg"
},

{
name:"Workspace",
image:"/rooms/workspace.jpg"
}

]

return(

<section className="max-w-7xl mx-auto px-8 py-32">

{/* Section Title */}

<div className="text-center mb-20">

<h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-4">
Shop By Room
</h2>

<p className="text-gray-600 max-w-xl mx-auto text-lg">
Find décor pieces tailored for every corner of your home.
</p>

</div>


{/* Room Grid */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

{rooms.map((room,i)=>(

<Link
href="#"
key={i}
className="relative group cursor-pointer overflow-hidden rounded-2xl"
>

<Image
src={room.image}
alt={room.name}
width={500}
height={500}
className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
/>


{/* Overlay */}

<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"/>


{/* Room Name */}

<div className="absolute inset-0 flex items-center justify-center">

<h3 className="text-white text-xl font-semibold tracking-wide group-hover:text-[#C6A969] transition">
{room.name}
</h3>

</div>

</Link>

))}

</div>

</section>

)

}