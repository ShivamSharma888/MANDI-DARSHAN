// src/pages/BuddhistSites.jsx
import React from "react";
import HeroImage from "../assets/slider/mountain.jpg"; // Add a suitable hero image for Buddhist Sites

const buddhistSites = [
  {
    id: 1,
    name: "Rewalsar Lake & Monastery",
    description:
      "A sacred site revered by Buddhists, Hindus, and Sikhs, with a beautiful monastery overlooking the serene lake.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.-QuYOhwVnhy-OAZik7uy2wHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Tibetan Monastery, Mandi",
    description:
      "A vibrant monastery reflecting Tibetan Buddhist culture, with colorful prayer flags and intricate murals.",
    image:
      "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_405,q_auto,w_750/v1684950082/bbj/apa87hqmtqs3n7a0q6m9.jpg",
  },
  
];

export default function BuddhistSites() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-80 md:h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center px-6">
          Buddhist Sites in Mandi
        </h1>
      </div>

      {/* Buddhist Sites Section */}
      <section className="py-16 px-6 lg:px-24 bg-blue-50">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {buddhistSites.map(({ id, name, description, image }) => (
            <div
              key={id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image with overlay */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  {name}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <div className="mt-16 text-center px-6">
        <p className="text-blue-800 font-semibold text-lg sm:text-xl">
          Explore the serene and spiritual Buddhist heritage of Mandi!
        </p>
      </div>
    </div>
  );
}
