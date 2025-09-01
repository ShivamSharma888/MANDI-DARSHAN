// src/pages/ArtsCrafts.jsx
import React from "react";

const artsCrafts = [
  {
    id: 1,
    name: "Wood Carving of Mandi",
    description:
      "Mandi is renowned for its intricate wooden carvings seen in temples, doors, and furniture. Local artisans create floral, mythological, and geometric motifs with great precision.",
    image: "https://gaatha.org/wp-content/uploads/23.jpg",
  },
  {
    id: 2,
    name: "Metal Craft (Bell Making)",
    description:
      "Mandi’s metal artisans are known for making traditional bells, ritual objects, and decorative copperware, widely used in temples and households.",
    image:
      "https://www.gaonconnection.com/wp-content/uploads/2024/05/500x300_369886-stories-published-on-web-85.webp",
  },
  {
    id: 3,
    name: "Pahari Miniature Paintings",
    description:
      "Mandi school of Pahari paintings developed under royal patronage. These miniature paintings depict religious themes, local deities, and scenes from epics like Ramayana and Mahabharata.",
    image:
      "https://images.saymedia-content.com/.image/t_share/MTc2MjkxNTk0MzE0OTE3MDU0/pahari-miniature-paintings-the-origin-and-the-great-masters.jpg",
  },
  {
    id: 4,
    name: "Handwoven Woolens",
    description:
      "Villages in Mandi produce woolen blankets, pattus, and shawls with traditional designs. These handmade woolens are known for warmth and durability.",
    image:
      "https://delhi-fun-dos.com/wp-content/uploads/2021/10/Himachali-weavers-weaving-shawls.jpg",
  },
  {
    id: 5,
    name: "Traditional Masks (Banjar Mela)",
    description:
      "Artisans of Mandi carve and paint traditional wooden masks used in folk festivals and dances, especially during Banjar and Shivratri festivals.",
    image:
      "https://mapacademy.io/wp-content/uploads/2022/04/fagli-masks-1-thumbnail.jpg",
  },
];

export default function ArtsCrafts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* 🌟 Hero Section */}
      <div
        className="relative h-80 md:h-96 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url("https://en.gaonconnection.com/wp-content/uploads/2024/05/369884-3.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-200 drop-shadow-lg">
            Arts & Crafts of Mandi
          </h1>
          <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Explore the unique <span className="font-semibold text-amber-300">arts and crafts of Mandi</span>, 
            where tradition meets creativity and heritage lives on.
          </p>
        </div>
      </div>

      {/* 🌸 Arts & Crafts Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {artsCrafts.map(({ id, name, description, image }) => (
            <div
              key={id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-amber-100"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                  {name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              </div>

              
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
}
