import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Cuisine data
const cuisines = [
  {
    id: 1,
    title: "Himachali Dham",
    description:
      "A traditional festive meal served on leaf plates, includes rice, dal, madra, and other local delicacies.",
    image: "/images/cuisine/dham.jpg",
  },
  {
    id: 2,
    title: "Sepu Vadi",
    description:
      "Steamed lentil dumplings cooked with yogurt, spices, and herbs, served as part of Himachali Dham.",
    image: "/images/cuisine/sepu.jpg",
  },
  {
    id: 3,
    title: "Chana Madra",
    description:
      "A rich dish made with chickpeas, yogurt, and local spices, often included in festive meals.",
    image: "/images/cuisine/madra.jpg",
  },
  {
    id: 4,
    title: "Siddu",
    description:
      "Steamed stuffed bread, usually served with ghee or lentil curry, a popular breakfast/snack in Mandi.",
    image: "/images/cuisine/sidu.jpg",
  },
];

export default function MandiCuisine() {
  return (
    <div className="py-20 px-6 lg:px-20 relative bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        Cuisines of Mandi, Himachal Pradesh
      </h2>

      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3} // show 3 slides on large screens
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cuisines.map((dish) => (
            <SwiperSlide key={dish.id}>
              <div className="px-2">
                <div className="relative group h-[26rem] sm:h-[28rem] lg:h-[30rem] w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end rounded-3xl">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {dish.title}
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom navigation arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 z-20 cursor-pointer text-gray-800 dark:text-white text-4xl hover:text-blue-600 transition-all">
            &#10094;
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-20 cursor-pointer text-gray-800 dark:text-white text-4xl hover:text-blue-600 transition-all">
            &#10095;
          </div>
        </Swiper>
      </div>
    </div>
  );
}
