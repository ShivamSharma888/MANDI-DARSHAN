// src/pages/EventsMandi.jsx
import { motion } from "framer-motion";

export default function EventsMandi() {
  const events = [
    {
      title: "International Mandi Shivratri Festival",
      description:
        "One of the biggest festivals in Himachal Pradesh where deities from across the valley gather in Mandi town, making it a spiritual and cultural extravaganza.",
      image:
        "https://www.livelaw.in/h-upload/2021/03/16/390626-mandi-shivaratri-fair-himachal-pradesh-high-court.jpg",
    },
    {
      title: "Losar Festival",
      description:
        "Celebrated by the Tibetan community, Losar marks the Tibetan New Year with prayers, folk dances, and cultural events.",
      image:
        "https://www.culturetravel.in/images/cultureEvents/losarFestival/main.jpg",
    },
    {
      title: "Baisakhi",
      description:
        "A harvest festival celebrated with joy and community gatherings, showcasing traditional dances, fairs, and local cuisine.",
      image:
        "https://www.samacharjustclick.com/wp-content/uploads/2025/04/the-baisakhi-sprit-colors-and-traditions-peachmode.webp",
    },
    {
      title: "Sarnauli Mela",
      description:
        "A sacred gathering where over 25 deities from mountain temples converge at Parashar Lake, led by Dev Shilhi Latogali Balatikka. This festival symbolizes a divine reunion and is deeply rooted in local legends.",
      image:
        "https://mysterioushimachal.wordpress.com/wp-content/uploads/2025/06/0521_sanohli.jpg",
    },
    {
      title: "Kamrunag Fair",
      description:
        "Held annually in June, this fair attracts a large number of devotees who participate in vibrant cultural activities, showcasing the region's rich traditions.",
      image:
        "https://staticimg.amarujala.com/assets/images/4cplus/2025/06/14/bugdha-thava-kamaranaga-ka-aitahasaka-saranahal-mal-ma-umaugdha-sharathathhalo-ka-bhaugdha-sarata-jaganprka-pathaka_276833fc62ff79cb56edd6aa425c33b6.jpeg",
    },
    {
      title: "Nalwar Fair",
      description:
        "Celebrated in April at Sundernagar, this fair is renowned for cattle trading and holds significant religious and cultural importance.",
      image:
        "https://sarojthakur.wordpress.com/files/2008/03/dsc05515.jpg",
    },
    {
      title: "Prashar Lake Fair",
      description:
        "Taking place in June near the picturesque Prashar Lake, this fair is a blend of spirituality and natural beauty, attracting both pilgrims and tourists.",
      image:
        "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1350x300/Blog_20250228-1056864826-1740729756.jpg",
    },
    {
      title: "Kuthah Fair",
      description:
        "Observed in May at Kuthah village near Thunag, this fair honors the Tangwasi deity and is marked by traditional rituals and festivities.",
      image:
        "https://www.divyahimachal.com/wp-content/uploads/2023/05/23md14-10.jpg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[50vh]"
        style={{
          backgroundImage: `url(${"https://himachalwatcher.com/wp-content/uploads/2018/02/Mandi-shivratri-2018-pictures.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Events of Mandi
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Festivals, Fairs & Celebrations
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Mandi, the cultural capital of Himachal Pradesh, is known for its vibrant
          festivals and fairs. From the world-famous Shivratri Fair to traditional
          celebrations like Losar, Baisakhi, and local fairs such as Sarnauli Mela and Kamrunag Fair,
          each event reflects the spiritual, cultural, and social vibrancy of the region.
        </p>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {events.map((event, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Event Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-60 sm:h-64 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {event.description}
              </p>
            </div>

           {/* Bottom Title */}
<div className="absolute bottom-4 left-0 w-full text-center">
  <h3 className="inline-block bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full text-gray-900 dark:text-gray-900 font-semibold text-lg sm:text-xl transition-opacity duration-500 group-hover:opacity-0">
    {event.title}
  </h3>
</div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
