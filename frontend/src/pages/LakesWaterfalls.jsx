// src/pages/LakesWaterfalls.jsx
import React from "react";
import HeroImage from "../assets/slider/river.jpg"; // Hero image for lakes/waterfalls

const lakes = [
  {
    id: 1,
    name: "Rewalsar Lake",
    description:
      "A sacred lake surrounded by myths and legends, revered by Hindus, Buddhists, and Sikhs alike. Known for its floating reed islands and serene atmosphere.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCBZgveL7zDyhh90IVFtV2GMdEA73RD0fMA&s",
  },
  {
    id: 2,
    name: "Prashar Lake",
    description:
      "Located at 2730 meters, this alpine lake is known for its floating island and the 13th-century temple dedicated to Sage Prashar on its banks.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMN7fmIFePjaOxnSDN_VnLDxP3TN2-XzRJg&s",
  },
  {
    id: 3,
    name: "Kamrunag Lake",
    description:
      "A high-altitude lake associated with the deity Kamrunag. Devotees offer coins and ornaments into the lake, making it a spiritual and scenic site.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bm1L8hKMZFOJI1c8FD7dxR45Oa2_zKQFLT1YcGnzLM_6x756QyiHA37JrSed9Le6ECA&usqp=CAU",
  },
  {
    id: 4,
    name: "Sundernagar Lake",
    description:
      "A man-made lake created by the Beas-Sutlej hydroelectric project. A peaceful spot with scenic views, ideal for evening walks.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1hVRWL098adzPuW-KibtTQr61rczzjaLLpKXOB9lPBO5HuF59IfuzUWMVarZvH1LeJ8&usqp=CAU",
  },
];

const waterfalls = [
  {
    id: 5,
    name: "Dehnasar Lake & Falls Trek",
    description:
      "Though famous for its lake, the trek also reveals hidden waterfalls along the route, offering breathtaking Himalayan scenery.",
    image:
      "https://www.trawell.in/admin/images/upload/685479320Mandi_Dehnasar_Lake_Main.jpg",
  },
  {
    id: 6,
    name: "Shikari Devi Waterfall",
    description:
      "On the way to Shikari Devi Temple, small cascading waterfalls can be spotted in the dense forest region, adding to the charm of the trek.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzR40CDRXH0nR_GXT563uWaCXJHIv3GdoFw&s",
  },
  {
    id: 7,
    name: "Barot Waterfalls (Uhl Valley)",
    description:
      "Hidden amidst the Barot valley of Mandi, these waterfalls are less explored and make for a perfect offbeat experience.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpBCLB4A4ZIkar7cbLyRn0LA7APQDuFId_w&s",
  },
];

export default function LakesWaterfalls() {
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
          Lakes & Waterfalls in Mandi
        </h1>
      </div>

      {/* Lakes Section */}
      <section className="py-16 px-6 lg:px-24 bg-blue-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12 text-center">
          Lakes of Mandi
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {lakes.map(({ id, name, description, image }) => (
            <div
              key={id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
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

      {/* Waterfalls Section */}
      <section className="py-16 px-6 lg:px-24 bg-blue-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12 text-center">
          Waterfalls of Mandi
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {waterfalls.map(({ id, name, description, image }) => (
            <div
              key={id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
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

      {/* Optional Footer CTA */}
      <div className="mt-16 text-center px-6">
        <p className="text-blue-800 font-semibold text-lg sm:text-xl">
          Experience the serene lakes and mesmerizing waterfalls of Mandi, Himachal Pradesh!
        </p>
      </div>
    </div>
  );
}
