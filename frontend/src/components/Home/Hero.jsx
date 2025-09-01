// src/components/Home/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Mountain from "../../assets/slider/mountain.jpg";
import River from "../../assets/slider/river.jpg";
import Valley from "../../assets/slider/valley.jpg";
import Temple from "../../assets/slider/temple.jpg";

const slides = [
  {
    id: 1,
    img: Temple,
    title: "Spiritual Himachal",
    description: "Discover ancient temples and the rich cultural heritage of Himachal Pradesh.",
    direction: "top",
  },
  {
    id: 2,
    img: Mountain,
    title: "Mighty Himalayas",
    description: "Experience the majestic snow-clad peaks and thrilling adventures in the Himalayas.",
    direction: "left",
  },
  {
    id: 3,
    img: River,
    title: "Serene Rivers",
    description: "Flow with the peaceful rivers that bring life and tranquility to the valleys.",
    direction: "right",
  },
  {
    id: 4,
    img: Valley,
    title: "Beautiful Valleys",
    description: "Explore lush green valleys, scenic trails, and breathtaking landscapes.",
    direction: "bottom",
  },
];

const directionVariants = {
  top: { hidden: { y: -200, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  bottom: { hidden: { y: 200, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: -200, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: 200, opacity: 0 }, visible: { x: 0, opacity: 1 } },
};

export default function HeroSlider() {
  return (
    <div id="welcome" className="w-full h-screen relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen flex items-center justify-center">
              {/* Background Image */}
              <motion.img
                src={slide.img}
                alt={slide.title}
                initial="hidden"
                animate="visible"
                variants={directionVariants[slide.direction]}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute w-full h-full object-cover"
              />

              {/* Premium Light Overlays */}
              <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-gradient-radial from-yellow-400/30 via-transparent to-transparent rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-gradient-radial from-green-400/30 via-transparent to-transparent rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text Content */}
              <div className="relative text-center max-w-3xl px-6">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-2xl"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow-md"
                >
                  {slide.description}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white text-lg font-semibold rounded-full shadow-xl transition-all hover:scale-105"
                >
                  Explore More
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
