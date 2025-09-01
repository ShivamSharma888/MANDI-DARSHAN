// src/pages/Museums.jsx
import React from "react";
import HeroImage from "../assets/slider/river.jpg"; // Hero image for Museums

const museums = [
  {
    id: 1,
    name: "Central Research Institute Museum",
    description:
      "Displays a fascinating collection of medical instruments, Himalayan flora and fauna exhibits, and historical documents.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.T9EARpIO5HA5yDjJ7As2SAHaDl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3g",
  },
  {
    id: 2,
    name: "Archaeological Museum, Mandi",
    description:
      "Showcases ancient artifacts, sculptures, and manuscripts reflecting the rich cultural heritage of the region.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Archaeological_Museum_Mandi.jpg",
  },
  {
    id: 3,
    name: "State Museum of Himachal Pradesh",
    description:
      "Features exhibits related to the history, art, and culture of Himachal Pradesh, including traditional costumes and tools.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Himachal_Pradesh_State_Museum.jpg",
  },
];

export default function Museums() {
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
          Explore Museums in Mandi
        </h1>
      </div>

      {/* Museums Section */}
      <section className="py-16 px-6 lg:px-24 bg-green-50">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {museums.map(({ id, name, description, image }) => (
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
                <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-2">
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
        <p className="text-green-800 font-semibold text-lg sm:text-xl">
          Discover the rich heritage and culture preserved in Mandi’s museums!
        </p>
      </div>
    </div>
  );
}
