import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const mandiCities = [
  {
    id: 1,
    name: "Rewalsar",
    description: "Sacred town known for the serene Rewalsar Lake and monasteries.",
    image: "https://prajnatrust.org/wp-content/uploads/2024/06/from-statue-rewalsar.jpg",
  },
  {
    id: 2,
    name: "Sarkaghat",
    description: "Sarkaghat is a town in Mandi district, HP, India.",
    image: "https://disttmandi.com/wp-content/uploads/2013/01/Sarkaghat2.jpg",
  },
  {
    id: 3,
    name: "Joginder Nagar",
    description: "City of Powerhouses, surrounded by scenic hills and rivers.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9e/bf/a9/trekker-s-nest.jpg?w=800&h=800&s=1",
  },
  {
    id: 4,
    name: "Mandi",
    description: "Cultural town, rich in temples and architectural heritage.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mandi_town.jpg/330px-Mandi_town.jpg",
  },
  {
    id: 5,
    name: "Sundernagar",
    description: "Lush valley town known for its man‑made lake and gardens.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwLk1vlv3p4Wg6CJn3SqF8rc1-k1oLjIvaA&s",
  },
];

export default function Cities() {
  return (
    <section
      id="cities"
      className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
      >
        Explore Cities & Towns of Mandi District
      </motion.h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={800}
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {mandiCities.map((city, i) => (
          <SwiperSlide key={city.id}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-3xl overflow-hidden h-72 sm:h-80 lg:h-96 shadow-xl cursor-pointer group"
            >
              {/* City Image */}
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              {/* Bottom Name (default) */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 text-white text-center text-lg font-semibold transition-opacity duration-500 group-hover:opacity-0">
                {city.name}
              </div>

              {/* Center Overlay on Hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 rounded-3xl opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-500">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {city.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {city.description}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
