// src/pages/TemplesMonuments.jsx
import React from "react";

const temples = [
  {
    id: 1,
    name: "Bhootnath Temple",
    description:
      "An ancient Shiva temple known for its exquisite stone carvings and spiritual atmosphere. Located in the heart of Mandi.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Bhootnath_temple_in_Mandi%2C_Himachal_Pradesh.jpg",
  },
  {
    id: 2,
    name: "Rewalsar Temple",
    description:
      "A sacred pilgrimage site for Hindus, Sikhs, and Buddhists, famous for the serene Rewalsar Lake and associated temples.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Rewalsar_Lake.jpg",
  },
  {
    id: 3,
    name: "Bhima Kali Temple",
    description:
      "An impressive temple dedicated to Goddess Bhima Kali, showcasing beautiful traditional Himachali architecture.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Bhima_Kali_Temple%2C_Mandi.jpg",
  },
  {
    id: 4,
    name: "Triloknath Temple",
    description:
      "A picturesque temple on the banks of the Beas River, dedicated to Lord Shiva and known for its tranquil surroundings.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Triloknath_temple_Mandi.jpg",
  },
];

export default function TemplesMonuments() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-24">
      <h1 className="text-4xl font-extrabold text-center text-yellow-800 mb-12">
        Temples & Monuments of Mandi, Himachal Pradesh
      </h1>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {temples.map(({ id, name, description, image }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-yellow-700 mb-2">{name}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
