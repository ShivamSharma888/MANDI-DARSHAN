import React from "react";

export default function GlimpsesMandi() {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
     {/* 🌟 Hero Section */}
<div
  className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNp0E6Iov5iCZ4SrQb8xv6QXuNY3-o_EyzYAz5BqqgDzye8i9xkksq446Yq3GJytUT5aPfwnj1zBi2prFFzjUmPjLKvtHCwjXDzQUR_vh-39P16niNrcztlhHHL5B9G8txKMD3S_pqQkHk/s1600/Maha+Shivratri+Fair+in+Mandi+town+of+Himachal+Pradesh+in+India+-+A+Famous+Fair+where+all+God+&+Godesses+meet+each+other+to+celebrate+Shivratri+Festival+(11+of+13).jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex items-center justify-center">
    <div className="text-center px-6">
      {/* Main Heading */}
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
        Glimpses of Mandi
      </h1>
      {/* Subheading */}
      <h2 className="text-yellow-300 text-2xl md:text-3xl font-semibold mt-4 drop-shadow">
        Discover Mandi
      </h2>
      {/* Tagline */}
      <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Majestic mountains, ancient temples, vibrant culture, and timeless
        traditions — Mandi is the cultural hub of Himachal Pradesh.
      </p>
    </div>
  </div>
</div>


      

      {/* Menu Bar */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow z-20">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 py-3 text-sm md:text-base font-medium">
          {[
            { id: "history", label: "History / Climate / Cities" },
            { id: "art", label: "Art & Architecture" },
            { id: "literature", label: "Literature" },
            { id: "handicrafts", label: "Handicrafts" },
            { id: "culture", label: "Cultural Heritage" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-100 hover:text-yellow-700 font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* History Section */}
        <section id="history" className="space-y-6">
          <img
            src="https://cdn.s3waas.gov.in/s308c5433a60135c32e34f46a71175850c/uploads/bfi_thumb/2019013027-olw6zugltm4yijs5i8ts7asv119hpshkd3ar790n34.jpg"
            alt="History of Mandi"
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-lg transform hover:scale-[1.03] transition duration-500"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            History, Climate & Cities
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Mandi, often called ‘Chhoti Kashi’, has a glorious past with 81
            ancient temples, a pleasant climate, and vibrant towns that preserve
            centuries of traditions.
          </p>
        </section>

        {/* Art & Architecture */}
        <section id="art" className="space-y-6">
          <img
            src="https://www.esamskriti.com/essays/docfile/15_5497.jpg"
            alt="Art & Architecture"
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-lg transform hover:scale-[1.03] transition duration-500"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Art & Architecture
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Mandi’s temples and palaces showcase Shikhara and Pagoda styles,
            blending devotion with artistry. Each carving tells a story of
            history and culture.
          </p>
        </section>

        {/* Literature */}
        <section id="literature" className="space-y-6">
          <img
            src="https://cdn.exoticindia.com/images/products/original/composites/1724911669-bkna236.jpg"
            alt="Literature"
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-lg transform hover:scale-[1.03] transition duration-500"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Literature
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Rooted in Sanskrit and Pahari culture, Mandi’s literature includes
            folk tales and poetry that reflect the wisdom and beauty of the
            Himalayas.
          </p>
          <button className="px-6 py-2 mt-4 bg-yellow-600 text-white rounded-xl shadow-md hover:bg-yellow-700 transition">
            Read More
          </button>
        </section>

        {/* Handicrafts */}
        <section id="handicrafts" className="space-y-6">
          <img
            src="https://www.gaonconnection.com/wp-content/uploads/2024/05/500x300_369886-stories-published-on-web-85.webp"
            alt="Handicrafts"
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-lg transform hover:scale-[1.03] transition duration-500"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Handicrafts
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Wooden carvings, metal works, and handwoven fabrics are masterpieces
            of Mandi’s artisans — true treasures of Himalayan heritage.
          </p>
        </section>

        {/* Cultural Heritage */}
        <section id="culture" className="space-y-6">
          <img
            src="https://himachalwatcher.com/wp-content/uploads/2021/03/mandi-maha-shivratri-2021-pics.jpg"
            alt="Cultural Heritage"
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-lg transform hover:scale-[1.03] transition duration-500"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Cultural Heritage
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Festivals, music, and dance form the heartbeat of Mandi. The
            Shivratri Fair, folk Nati dance, and traditional music embody the
            spirit of the region.
          </p>

          {/* Inner subsections */}
          <div className="grid md:grid-cols-2 gap-10 pt-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Music & Dance
              </h3>
              <p className="text-gray-600 text-lg">
                Traditional Nati dance and folk songs are performed during
                fairs, reflecting joy and community spirit.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Festivals & Fairs
              </h3>
              <p className="text-gray-600 text-lg">
                The world-famous Shivratri Fair brings hundreds of deities and
                thousands of devotees together in devotion and celebration.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
