// src/pages/ForestWildlife.jsx
import React from "react";
import HeroImage from "../assets/slider/mountain.jpg"; // Add a suitable forest hero image in assets

const forestAreas = [
  {
    id: 1,
    name: "Sundernagar Forest",
    description:
      "A lush green forest area near Sundernagar known for diverse flora and fauna, perfect for nature walks and bird watching.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.pA6fO-_XNuUJwaBEO4zVuAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Nargu Wildlife Sanctuary",
    description:
      "Home to Himalayan species including musk deer, pheasants, and exotic birds. A must-visit for wildlife enthusiasts",
    image:
      "https://aryango.com/wp-content/uploads/2023/09/Nargu-Wildlife-Sanctuary-Himachal-Pradesh-1024x576.jpg",
  },
  {
    id: 3,
    name: "Shikari Devi Forest",
    description:
      "Dense alpine forest surrounding the famous Shikari Devi temple. Known for its serenity, rich biodiversity, and trekking trails.",
    image:
      "https://www.shutterstock.com/image-photo/15may2022beautiful-view-shikari-devi-temple-260nw-2198921779.jpg",
  },
  {
    id: 4,
    name: "Kamrunag Sacred Forest",
    description:
      "A sacred forest around Kamrunag Lake, with deodar and oak trees. Locals believe it is blessed and protected by Lord Kamrunag.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDD6uL52orCJ-gfdOuLMHjp2dl1KODGD0UZA&s",
  },
  {
    id: 5,
    name: "Tattapani Hillside Forest",
    description:
      "Forest region near Tattapani hot springs, with pine and oak vegetation and scenic river views.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ac/45/30/glen.jpg?w=400&h=-1&s=1",
  },
];

const wildlifeSpots = [
  {
    id: 1,
    name: "Nargu Wildlife Sanctuary",
    description:
      "Spread across Mandi and Kullu districts, this sanctuary is home to Himalayan musk deer, pheasants, and black bears.",
    image:
      "https://naparks.com/wp-content/uploads/2024/06/Panjaund-Hill-Top-1024x538.webp",
    animals: ["Musk Deer", "Himalayan Pheasant", "Black Bear", "Exotic Birds"],
  },
  {
    id: 2,
    name: "Shikari Devi Wildlife Belt",
    description:
      "The surrounding forest of Shikari Devi temple supports Himalayan monals, leopards, and barking deer.",
    image:
      "https://thenewshimachal.com/wp-content/uploads/2016/02/Shikari-Devi-temple.jpg",
    animals: ["Himalayan Monal", "Leopard", "Barking Deer", "Wild Boar"],
  },
  {
    id: 3,
    name: "Kamrunag Sacred Ecosystem",
    description:
      "Known for mythological significance and as a haven for migratory birds and Himalayan black bears.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuT18Mc8KFvC_afU_-eAdTff0N3zuTFiOpzw&s",
    animals: ["Himalayan Black Bear", "Migratory Birds", "Leopard"],
  },
  {
    id: 4,
    name: "Barot Forest & Uhl Valley",
    description:
      "Dense forests in Barot and Uhl Valley, rich in Himalayan trout streams and wildlife diversity.",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/71/b9/80/valley-ds.jpg",
    animals: ["Himalayan Trout", "Goral", "Pheasants", "Himalayan Griffon"],
  },
];

export default function ForestWildlife() {
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
          Explore Forests & Wildlife in Mandi
        </h1>
      </div>

      {/* Forest Areas Section */}
      <section className="py-16 px-6 lg:px-24 bg-green-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-12 text-center">
          Forest Areas
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {forestAreas.map(({ id, name, description, image }) => (
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

      {/* Wildlife Section */}
      <section className="py-16 px-6 lg:px-24 bg-green-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-12 text-center">
          Wildlife
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {wildlifeSpots.map(({ id, name, description, image, animals }) => (
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
                <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-2">
                  {name}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2">
                  {description}
                </p>
                <div className="text-green-800 font-semibold">
                  Animals: {animals.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
