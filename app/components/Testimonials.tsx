"use client"

export default function Testimonials(){

const testimonials=[

{
name:"Ananya Mehta",
role:"Interior Designer",
quote:"Beautiful craftsmanship and elegant décor pieces that elevate interiors."
},

{
name:"Rohit Kapoor",
role:"Architect",
quote:"The mandala collection adds a perfect blend of tradition and modern design."
},

{
name:"Neha Shah",
role:"Home Stylist",
quote:"Exceptional quality and visually stunning décor elements."
}

]

return(

<section className="bg-[#F7F5F2] py-32">

<div className="max-w-7xl mx-auto px-8">

{/* Section Header */}

<div className="text-center mb-20">

<h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-4">
What Designers Say
</h2>

<p className="text-gray-600 max-w-xl mx-auto text-lg">
Trusted by interior designers and stylists who appreciate craftsmanship and timeless décor.
</p>

</div>


{/* Testimonials Grid */}

<div className="grid md:grid-cols-3 gap-12">

{testimonials.map((t,i)=>(

<div
key={i}
className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition duration-500"
>

{/* Quote Icon */}

<p className="text-4xl text-[#C6A969] mb-6">“</p>

{/* Quote Text */}

<p className="text-gray-600 mb-8 leading-relaxed text-lg">
{t.quote}
</p>

{/* Divider */}

<div className="w-10 h-[2px] bg-[#C6A969] mb-6"/>

{/* Author */}

<h4 className="font-semibold text-gray-900">
{t.name}
</h4>

<p className="text-sm text-gray-500">
{t.role}
</p>

</div>

))}

</div>

</div>

</section>

)

}