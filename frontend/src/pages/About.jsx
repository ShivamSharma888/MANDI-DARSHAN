// src/pages/AboutMandi.jsx
import React, { useState } from "react";
import { MapPin, Info, Calendar, Compass, Cloud, Gift, BookOpen, Menu, X } from "lucide-react";
import AboutImg from "../assets/slider/valley.jpg";
// Menu items
const menuItems = [
  { id: 1, title: "Info", icon: <Info />, content: "Mandi, known as 'Chhoti Kashi', is a picturesque town in Himachal Pradesh. Famous for its 81+ temples, scenic valleys, and rich cultural heritage, it attracts tourists, spiritual seekers, and adventure enthusiasts alike." },
  { id: 2, title: "History", icon: <BookOpen />, content: "" },
  { id: 3, title: "How to Reach", icon: <MapPin />, content: "By Air: Nearest airport is Bhuntar (Kullu). By Train: Pathankot is the nearest major railway station. By Road: Well-connected by buses and taxis from Shimla, Manali, and Delhi." },
  { id: 4, title: "Distances", icon: <Compass />, content: "Shimla - 150 km, Manali - 120 km, Kullu - 65 km, Delhi - 520 km, Chandigarh - 240 km." },
  { id: 5, title: "Things to Do", icon: <Gift />, content: "Visit temples, trek in surrounding valleys, enjoy river rafting on Beas, explore local markets, and attend cultural fairs." },
  { id: 6, title: "Tourist Utility", icon: <MapPin />, content: "ATMs, hospitals, travel agencies, guides, and taxi services are easily available. Tourist info centers provide maps and assistance." },
  { id: 7, title: "Weather", icon: <Cloud />, content: "Summers: 15-30°C, Winters: 2-15°C. Best time to visit: March-June & September-November." },
  { id: 8, title: "Fests & Fairs", icon: <Calendar />, content: "Famous for Shivratri Fair, Nalwar Mela, Baisakhi, Holi celebrations, and other local cultural festivals." },
];

// History data
const historyData = [
  {
    year: "Ancient Era",
    text: "Mandi, historically called 'Chhoti Kashi', was established in the 16th century by the princely dynasty. The town flourished as a spiritual and cultural hub, with stone temples and traditional architecture reflecting its rich legacy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Bhootnath_temple_in_Mandi%2C_Himachal_Pradesh.jpg",
  },
  {
    year: "18th Century",
    text: "During the 18th century, Mandi saw growth in trade and architecture. Several temples, palaces, and forts were built, showcasing Nagara-style architecture and intricate carvings.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mandi_old_temple.jpg",
  },
  {
    year: "Modern Era",
    text: "Today, Mandi is a blend of tradition and modernity. It has modern infrastructure, educational institutions like IIT Mandi, and hosts cultural events attracting domestic and international tourists.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Mandi_city_view.jpg",
  },
];

export default function AboutMandi() {
  const [activeMenu, setActiveMenu] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4 lg:px-20"
      style={{ backgroundImage: `url(${AboutImg})` }}
    >
      {/* Page Title */}
      <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-yellow-100 mb-12 drop-shadow-lg tracking-wide">
        Discover Mandi
      </h1>

      {/* Hamburger Button for Mobile */}
      <div className="lg:hidden flex justify-end mb-6">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-yellow-100"
        >
          {sidebarOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div className="lg:grid lg:grid-cols-4 gap-10">
        {/* Left Sidebar */}
       <aside
  className={`col-span-1 bg-white/90 backdrop-blur-md shadow-lg rounded-3xl p-6 space-y-4 transition-all duration-300 lg:block
    ${sidebarOpen ? "absolute top-28 left-4 w-72 h-[80vh] overflow-y-auto z-20" : "hidden lg:block"}`}
>

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveMenu(item.id);
                setSidebarOpen(false); // close sidebar on mobile click
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-300 ${
                activeMenu === item.id ? "bg-yellow-200 text-yellow-700 font-semibold" : "text-gray-700 hover:bg-yellow-50"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </aside>

        {/* Right Content */}
        <main className="col-span-3 space-y-8">
          {activeMenu === 2 ? (
            // History Section
            <div className="space-y-8">
              {historyData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-center gap-6 bg-white rounded-3xl shadow-2xl overflow-hidden p-4"
                >
                  <img
                    src={item.image}
                    alt={item.year}
                    className="w-full lg:w-1/3 h-64 object-cover rounded-2xl"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-yellow-700 mb-2">{item.year}</h2>
                    <p className="text-gray-800 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Other Menu Items
            <div className="bg-white rounded-3xl shadow-2xl p-6">
              {menuItems
                .filter((item) => item.id === activeMenu)
                .map((item) => (
                  <div key={item.id}>
                    <h2 className="text-3xl font-bold text-yellow-700 mb-4">{item.title}</h2>
                    <p className="text-gray-800 leading-relaxed">{item.content}</p>
                  </div>
                ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
