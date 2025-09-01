// src/pages/ExperienceMandi.jsx
import React, { useState, useEffect } from "react";
import BgImage from "../../assets/temple.jpg";
import Bootnath from "../../assets/bootnath.jpeg";
import Snowpeaks from "../../assets/snow peaks.jpg";
import Culture from '../../assets/kinnauri-nati-dance.jpg';
import Dham from '../../assets/dham.jpg';
import Roadtrip from '../../assets/Roadtrip.jpg';
import MandiMela from '../../assets/mandimela.jpg';
import './home.css';
const experiences = [
  {
    number: 1,
    title: "Temples & Monuments",
    subtitle: "A Saga of Excellence",
    description:
      "Mandi, often called 'Chhoti Kashi', is home to more than 81 ancient stone temples dedicated to Lord Shiva and other deities. The most famous is the Bhootnath Temple in the heart of the town, built in the 16th century. The Triloknath Temple, Panchvaktra Temple, and Shyamakali Temple are other architectural marvels with intricate Nagara-style carvings and sculptures. The entire town feels like a living museum of faith and art, offering both spiritual serenity and historical wonder.",
    image: Bootnath,
  },
  {
    number: 2,
    title: "Snowy Peaks",
    subtitle: "Nature's Crown",
    description:
      "Surrounded by the majestic Dhauladhar and Pir Panjal ranges, Mandi offers breathtaking views of snow-capped peaks. In winters, the nearby Prashar Lake region and Janjehli Valley transform into snowy wonderlands. These pristine peaks are perfect for trekking, camping, and capturing surreal Himalayan landscapes. The crisp mountain air and untouched beauty make Mandi a paradise for adventurers and peace seekers alike.",
    image: Snowpeaks,
  },
  {
    number: 3,
    title: "Festivals",
    subtitle: "Colors of Culture",
    description:
      "Mandi is world-famous for its grand Shivratri Fair, a week-long festival that brings together over 200 local deities carried in colorful palanquins. Thousands of devotees gather to celebrate with rituals, folk music, and vibrant processions, symbolizing Himachal’s deep spiritual unity. Apart from Shivratri, fairs like Nalwar Mela and festivals like Baisakhi and Holi are celebrated with equal zeal, filling the town with joy, colors, and tradition.",
    image: Culture,
  },
  {
    number: 4,
    title: "Cuisine",
    subtitle: "Flavors of Himachal",
    description:
      "Mandi is a haven for food lovers, especially with its Himachali Dham — a festive meal cooked by traditional chefs and served on leaf plates. Dishes like Sepu Vadi, Rajmah Madra, Chana Madra, Meetha Bhatt, and Khatta combine lentils, yogurt, and spices in unique local styles. Street foods like siddu (stuffed bread) and babru (Himachali kachori) add to the flavors. Every bite reflects the region’s warmth, hospitality, and centuries-old culinary heritage.",
    image: Dham,
  },
  {
    number: 5,
    title: "Roadtrip",
    subtitle: "Journey of a Lifetime",
    description:
      "Mandi is a gateway to some of Himachal’s most scenic road trips. The winding highways along the Beas River offer mesmerizing views of valleys and pine-covered slopes. Short drives take you to hidden gems like Barot Valley, known for trout fishing and trekking, or Prashar Lake, with its floating island and a 13th-century temple. Every turn reveals waterfalls, apple orchards, and quaint villages, making the journey as memorable as the destination.",
    image: Roadtrip,
  },
  {
    number: 6,
    title: "Cultural",
    subtitle: "Sacred & Serene",
    description:
      "Mandi is a melting pot of faiths and traditions. Rewalsar Lake, also known as 'Tso Pema', is revered by Hindus, Sikhs, and Buddhists alike. According to legend, Guru Padmasambhava meditated here before spreading Buddhism to Tibet. The lake is surrounded by monasteries, Hindu temples, and a Gurudwara commemorating Guru Gobind Singh Ji’s visit. A massive statue of Guru Rinpoche overlooks the serene waters. Every year, fairs and rituals are held here, making it a symbol of harmony, spirituality, and cultural exchange.",
    image:
      MandiMela,
  },
];

export default function ExperienceMandi() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === experiences.length ? 1 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeExp = experiences.find((e) => e.number === active);

  return (
    <div
      className="relative min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-20"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-50/80"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 w-full">
          {/* Numbers column (Desktop only) */}
          <div className="relative hidden lg:flex flex-col items-start space-y-6">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-purple-500 via-blue-400 to-purple-600" />
            {experiences.map((exp) => (
              <button
                key={exp.number}
                onClick={() => setActive(exp.number)}
                aria-pressed={active === exp.number}
                className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-full font-bold border-2 transition-all duration-300 ${
                  active === exp.number
                    ? "bg-yellow-500 border-yellow-600 text-white scale-110 shadow-md"
                    : "bg-white border-gray-300 text-gray-700 hover:border-yellow-500"
                }`}
              >
                {exp.number}
              </button>
            ))}
          </div>

          {/* Active content */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div
              className="
                flex flex-col 
                md:flex-col 
                lg:flex-row 
                items-start lg:items-center 
                gap-8 transition-all duration-700 ease-in-out
              "
            >
              {/* Image first on mobile, text below */}
              <div className="w-full lg:w-1/2 order-1 md:order-1 lg:order-2">
                <img
                  src={activeExp.image}
                  alt={activeExp.title}
                  className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover rounded-2xl shadow-lg transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Text content */}
              <div className="flex-1 order-2 md:order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-600">
                    {activeExp.number}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                    {activeExp.title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-yellow-700">{activeExp.subtitle}</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 leading-relaxed">
                  {activeExp.description}
                </p>
              </div>
            </div>

            {/* Mobile navigation dots */}
            <div className="flex justify-center gap-3 mt-4 lg:hidden">
              {experiences.map((exp) => (
                <button
                  key={exp.number}
                  onClick={() => setActive(exp.number)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    active === exp.number ? "bg-yellow-600 scale-110" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

