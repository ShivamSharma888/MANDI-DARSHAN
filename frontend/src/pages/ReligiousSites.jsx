import React from "react";
import { motion } from "framer-motion";

const eras = [
  {
    title: "Ancient Era",
    years: "325 - 1500 AD",
    description:
      "The foundation of Mandi's rich cultural heritage with stone temples and early shrines.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Medieval Era",
    years: "1500 - 1700 AD",
    description:
      "A time of transition marked by fortified temples and evolving traditions.",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Royal Era",
    years: "1700 - 1900 AD",
    description:
      "Mandi flourished under royal patronage with grand temples and architecture.",
    color: "from-purple-500 to-indigo-700",
  },
  {
    title: "Modern Era",
    years: "1900 - Present",
    description:
      "Blend of tradition and modernity with festivals and preservation of temples.",
    color: "from-blue-500 to-cyan-600",
  },
];

const sites = [
  {
    name: "Bhootnath Temple",
    description:
      "Built in the 1520s by Raja Ajber Sen, this Shiva temple is the spiritual heart of Mandi.",
    img: "https://www.trawell.in/admin/images/upload/685479233boothnath.jpg",
    googleMapsLink: "https://www.google.com/maps?q=Bhootnath+Temple+Mandi",
  },
  {
    name: "Rewalsar (Tso Pema)",
    description:
      "A sacred site for Hindus, Sikhs, and Buddhists alike, known for its lake, monasteries, and Guru Rinpoche’s statue.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkO670QYGu8Zfs9dBIJDEzJW9ycw4mP3pGDg&s",
    googleMapsLink: "https://www.google.com/maps?q=Rewalsar+Lake+Mandi",
  },
  {
    name: "Triloknath Temple",
    description:
      "Dedicated to Lord Shiva, it is one of the oldest temples in the Mandi district.",
    img: "https://mandi.hptours.org/sites/default/files/styles/large/public/images/TrilokinathTemple.jpg",
    googleMapsLink: "https://www.google.com/maps?q=Triloknath+Temple+Mandi",
  },
  {
    name: "Panchvaktra Temple",
    description:
      "A unique temple dedicated to Lord Shiva with a five-faced idol, located at the confluence of Beas and Suketi rivers.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1f/74/d0/panchvaktra-temple.jpg?w=1200&h=-1&s=1",
    googleMapsLink: "https://www.google.com/maps?q=Panchvaktra+Temple+Mandi",
  },
  {
    name: "Tarna Devi Temple",
    description:
      "Situated on Tarna Hill, this temple dedicated to Goddess Shyama Kali offers a panoramic view of Mandi town.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL96gFacNmIaMXizMThheZ18S_RD7bCQnoQg&s",
    googleMapsLink: "https://www.google.com/maps?q=Tarna+Devi+Temple+Mandi",
  },
  {
    name: "Gurudwara Gobind Singh Ji",
    description:
      "A revered Sikh shrine marking the visit of Guru Gobind Singh Ji during his journey to the Himalayas.",
    img: "https://seawatersports.com/images/places/gurudwara-sri-guru-gobind-singh-ji.png",
    googleMapsLink:
      "https://www.google.com/maps?q=Gurudwara+Gobind+Singh+Ji+Mandi",
  },
  {
    name: "Ardhnareshwar Temple",
    description:
      "An ancient temple showcasing Lord Shiva in Ardhanarishwar form, symbolizing the union of Shiva and Shakti.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/AEDHNARISHWAR_TEMPLE%2C_MANDI_%28FRONT_VIEW%29.jpg/1200px-AEDHNARISHWAR_TEMPLE%2C_MANDI_%28FRONT_VIEW%29.jpg",
    googleMapsLink:
      "https://www.google.com/maps?q=Ardhnareshwar+Temple+Mandi",
  },
  {
    name: "Bhima Kali Temple (Bakhli)",
    description:
      "A sacred Shakti Peeth dedicated to Goddess Bhima Kali, reflecting the deep-rooted Devi worship in Mandi.",
    img: "https://i0.wp.com/www.himachaltaxi.com/wp-content/uploads/2014/05/Bhimakali-Temple.jpg?resize=650%2C467",
    googleMapsLink:
      "https://www.google.com/maps?q=Bhima+Kali+Temple+Bakhli+Mandi",
  },
  {
    name: "Shikhari Devi Temple",
    description:
      "Located at an altitude of 2850 meters, this temple dedicated to Shikhari Devi offers breathtaking views and is a major pilgrimage site.",
    img: "https://www.trawell.in/admin/images/upload/685479199shikari_devi.jpg",
    googleMapsLink:
      "https://www.google.com/maps?q=Shikhari+Devi+Temple+Mandi",
  },
  {
    name: "Kamrunag Temple",
    description:
      "A famous pilgrimage site at 3,334 meters dedicated to Dev Kamrunag, surrounded by a serene lake.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnifXTEBmOLpkAM4WPRFISUaNB_cmAKVZlQ&s",
    googleMapsLink: "https://www.google.com/maps?q=Kamrunag+Temple+Mandi",
  },
];

const ReligiousSites = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 🌟 Hero Section */}
      <div className="relative h-80 md:h-96 flex items-center justify-center bg-gray-900">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${"https://www.holidify.com/images/bgImages/MANDI.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Heading + Subtitle */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            Religious Sites of Mandi District
          </h1>
          <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Explore the spiritual and cultural heritage of Mandi through its{" "}
            <span className="font-semibold text-yellow-300">temples</span>,{" "}
            shrines, and sacred lakes.
          </p>
        </div>
      </div>

      {/* Era Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-12">
        {eras.map((era, idx) => (
          <motion.div
            key={idx}
            className={`rounded-2xl p-5 text-white shadow-lg bg-gradient-to-br ${era.color} flex flex-col justify-between hover:shadow-2xl transition duration-300`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold">{era.title}</h3>
              <p className="text-sm italic">{era.years}</p>
              <p className="mt-2 text-xs md:text-sm">{era.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Religious Sites */}
      {/* Religious Sites */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12 px-4 md:px-8">
  {sites.map((site, idx) => (
    <motion.div
      key={idx}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.15 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={site.img}
          alt={site.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {site.name}
        </h3>
        <p className="text-gray-600 text-sm flex-1">
          {site.description}
        </p>

        {/* Button */}
        <div className="mt-4">
          <a
            href={site.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 transition"
          >
             Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default ReligiousSites;
