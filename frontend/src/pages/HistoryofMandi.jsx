// src/pages/HistorySplit.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaCalendarAlt } from "react-icons/fa";

const historySections = [
  {
    title: "Mandi History",
    data: [
      {
        era: "Ancient Era",
        years: "325 - 1500 AD",
        description:
          "Foundation of Mandi's cultural heritage with stone temples and early shrines.",
        color: "from-yellow-400 to-orange-500",
        rulers: [
          {
            name: "Raja Bahu Sen",
            years: "c. 325 – 350 AD",
            facts: ["Founder of Sen dynasty", "Laid foundation for Mandi"],
          },
          {
            name: "Raja Ban Sen",
            years: "1301 – 1346 AD",
            facts: ["Constructed Prashar Temple", "Promoted early architecture"],
          },
        ],
      },
      {
        era: "Medieval Era",
        years: "1500 - 1700 AD",
        description:
          "Transition period with fortified temples and evolving traditions.",
        color: "from-green-400 to-emerald-600",
        rulers: [
          {
            name: "Raja Ajbar Sen",
            years: "1527 – 1534 AD",
            facts: ["Founded present Mandi town", "Built Bhootnath Temple"],
          },
          {
            name: "Raja Chhatar Sen",
            years: "1534 – 1554 AD",
            facts: ["Expanded kingdom", "Built Lakargarh Fort"],
          },
          {
            name: "Raja Sahib Sen",
            years: "1554 – 1575 AD",
            facts: [
              "Strengthened alliances",
              "Married Rani Prakash Devi of Bilaspur",
            ],
          },
          {
            name: "Raja Narain Sen",
            years: "1575 – 1595 AD",
            facts: ["Expanded territory", "Built Naraingarh Fort"],
          },
        ],
      },
      {
        era: "Royal Era",
        years: "1700 - 1900 AD",
        description:
          "Mandi flourished under royal patronage with grand temples and architecture.",
        color: "from-purple-500 to-indigo-700",
        rulers: [
          {
            name: "Raja Shamsher Sen",
            years: "1727 – 1781 AD",
            facts: [
              "Implemented administrative reforms",
              "Consolidated power",
            ],
          },
          {
            name: "Raja Ishwari Sen",
            years: "1788 – 1826 AD",
            facts: ["Maintained sovereignty", "Handled regional challenges"],
          },
          {
            name: "Raja Vijay Sen",
            years: "1851 – 1905 AD",
            facts: [
              "Built schools, hospitals, post offices",
              "Modernized infrastructure",
            ],
          },
        ],
      },
      {
        era: "Modern Era",
        years: "1900 – Present",
        description:
          "Blend of tradition and modernity; integration into India post-independence.",
        color: "from-blue-500 to-cyan-600",
        rulers: [
          {
            name: "Raja Joginder Sen",
            years: "1905 – 1947 AD",
            facts: [
              "Last ruling Raja before independence",
              "Integrated Mandi into Indian Union",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Suket History",
    data: [
      {
        era: "Ancient Era",
        years: "1100 - 1400 AD",
        description:
          "Suket’s early history under its first rulers and establishment of local forts.",
        color: "from-red-400 to-pink-500",
        rulers: [
          {
            name: "Raja Sidh Sen",
            years: "1100 – 1125 AD",
            facts: ["Founder of Suket dynasty", "Built first fort"],
          },
          {
            name: "Raja Raghunath Sen",
            years: "1125 – 1160 AD",
            facts: ["Expanded Suket territories", "Established trade routes"],
          },
        ],
      },
      {
        era: "Medieval Era",
        years: "1400 - 1700 AD",
        description:
          "Fortification and consolidation of Suket kingdom.",
        color: "from-indigo-400 to-blue-600",
        rulers: [
          {
            name: "Raja Udai Sen",
            years: "1450 – 1480 AD",
            facts: ["Built key temples", "Strengthened army"],
          },
          {
            name: "Raja Ranjit Sen",
            years: "1480 – 1520 AD",
            facts: ["Expanded forts", "Improved local governance"],
          },
        ],
      },
      {
        era: "Royal Era",
        years: "1700 - 1900 AD",
        description:
          "Suket thrived under royal patronage with cultural developments.",
        color: "from-yellow-500 to-orange-600",
        rulers: [
          {
            name: "Raja Bikram Sen",
            years: "1750 – 1800 AD",
            facts: ["Expanded fortifications", "Patron of arts"],
          },
          {
            name: "Raja Fateh Sen",
            years: "1800 – 1850 AD",
            facts: [
              "Promoted trade",
              "Built public temples and structures",
            ],
          },
        ],
      },
    ],
  },
];

const HistorySplit = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 🌟 Hero Section */}
      <div className="relative h-80 md:h-96 flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${"https://www.holidify.com/images/bgImages/MANDI.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            History of Mandi & Suket
          </h1>
          <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Explore the <span className="font-semibold text-yellow-300">royal legacy</span>, rulers, and cultural evolution of{" "}
            <span className="text-red-400 font-semibold">Mandi</span> and{" "}
            <span className="text-green-400 font-semibold">Suket</span>.
          </p>
        </div>
      </div>

      {/* Split Section */}
      <div className="relative flex flex-col md:flex-row md:divide-x md:divide-gray-300 p-6 md:p-12 gap-12">
        {/* Left Section - Mandi */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-yellow-500" /> Mandi History
          </h1>
          {historySections[0].data.map((era, idx) => (
            <motion.div
              key={idx}
              className={`p-6 rounded-2xl bg-gradient-to-br ${era.color} text-white shadow-lg`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                <FaCalendarAlt /> {era.era} ({era.years})
              </h2>
              <p className="text-sm md:text-base mb-4">{era.description}</p>
              <div className="space-y-3">
                {era.rulers.map((ruler, rIdx) => (
                  <motion.div
                    key={rIdx}
                    className="bg-white text-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="font-semibold flex items-center gap-2">
                      <FaCrown className="text-yellow-500" /> {ruler.name}
                    </h3>
                    <p className="italic text-gray-600 text-sm">{ruler.years}</p>
                    <ul className="list-disc list-inside text-sm mt-1">
                      {ruler.facts.map((fact, fIdx) => (
                        <li key={fIdx}>{fact}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Section - Suket */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-red-500" /> Suket History
          </h1>
          {historySections[1].data.map((era, idx) => (
            <motion.div
              key={idx}
              className={`p-6 rounded-2xl bg-gradient-to-br ${era.color} text-white shadow-lg`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                <FaCalendarAlt /> {era.era} ({era.years})
              </h2>
              <p className="text-sm md:text-base mb-4">{era.description}</p>
              <div className="space-y-3">
                {era.rulers.map((ruler, rIdx) => (
                  <motion.div
                    key={rIdx}
                    className="bg-white text-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="font-semibold flex items-center gap-2">
                      <FaCrown className="text-yellow-500" /> {ruler.name}
                    </h3>
                    <p className="italic text-gray-600 text-sm">{ruler.years}</p>
                    <ul className="list-disc list-inside text-sm mt-1">
                      {ruler.facts.map((fact, fIdx) => (
                        <li key={fIdx}>{fact}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySplit;
