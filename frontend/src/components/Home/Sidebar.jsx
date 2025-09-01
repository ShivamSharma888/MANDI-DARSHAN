// src/components/Sidebar.jsx
import React, { useEffect, useState } from "react";

const sections = [
  { id: "hero", title: "Home" },
  { id: "experience-mandi", title: "Experience Mandi" },
   { id: "cuisine", title: "Cuisine" },
    { id: "panorama-360", title: "360° Panorama" },
 
  { id: "cities", title: "Cities" },
  { id: "testimonials", title: "Testimonials" },
  { id: "contact", title: "Contact Us" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let hideTimeout;

    const handleScroll = () => {
      let currentSection = null;
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
      setVisible(true);

      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setVisible(false), 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <aside
      className={`hidden lg:flex fixed top-1/2 left-6 -translate-y-1/2 
                 flex-col items-start z-50 pointer-events-none
                 transition-opacity duration-700 ease-in-out
                 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <ul className="flex flex-col space-y-4 pointer-events-auto">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`group relative flex items-center gap-3 px-4 py-2 
                rounded-xl font-medium text-gray-500 hover:text-white transition-all
                duration-300 ease-in-out
                ${activeSection === section.id ? "bg-blue-600 text-white shadow-lg" : ""}`}
            >
              <span
                className={`absolute -left-3 w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                  activeSection === section.id ? "bg-white scale-125" : "bg-gray-400 scale-100"
                }`}
              ></span>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
