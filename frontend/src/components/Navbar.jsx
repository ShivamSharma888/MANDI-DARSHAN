// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu, Plus, Minus, Compass, Landmark, Car, Building, LogIn, UserPlus } from "lucide-react";
import { FaChurch, FaBook, FaLandmark, FaPagelines, FaWater, FaPaintBrush, FaCity, FaImage, FaCalendarAlt, FaQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveMenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveMenu(null);
  };

  const menus = [
    {
  title: "Home",
  link: "/",
  icon: <Building size={18} className="mr-2 text-yellow-500" />,
},
    {
      title: "Discover History",
      icon: <Compass size={18} className="mr-2 text-yellow-400" />,
      sub: [
        { name: "Historical Places", link: "/historical-sites", icon: <FaChurch className="mr-2 text-yellow-400" /> },
        { name: "Religious Sites", link: "/religious-sites", icon: <FaLandmark className="mr-2 text-yellow-400" /> },
        { name: "History of Mandi", link: "/history", icon: <FaBook className="mr-2 text-yellow-400" /> },
      ],
    },
    {
      title: "Attractions",
      icon: <Landmark size={18} className="mr-2 text-yellow-400" />,
      sub: [       
        { name: "Forest & Wildlife", link: "/forest-wildlife", icon: <FaPagelines className="mr-2 text-yellow-400" /> },
        { name: "Lakes & Waterfalls", link: "/lakes-waterfalls", icon: <FaWater className="mr-2 text-yellow-400" /> },
        { name: "Arts & Crafts", link: "/arts-crafts", icon: <FaPaintBrush className="mr-2 text-yellow-400" /> },
      ],
    },
    {
      title: "Other",
      icon: <FaCity className="mr-2 text-yellow-400" />,
      sub: [
        { name: "Glimpses of Mandi", link: "/glimpses-mandi", icon: <FaImage className="mr-2 text-yellow-400" /> },
        { name: "Events in Mandi", link: "/events", icon: <FaCalendarAlt className="mr-2 text-yellow-400" /> },
        { name: "FAQs", link: "/faqs", icon: <FaQuestionCircle className="mr-2 text-yellow-400" /> },
      ],
    },
    { title: "Parking", link: "/parking", icon: <Car size={18} className="mr-2 text-yellow-400" /> },
    { title: "Govt of Tourism", link: "https://www.himachaltourism.gov.in", icon: <Building size={18} className="mr-2 text-yellow-400" /> },
   { title: "Login", link: "/login", icon: <LogIn size={18} className="mr-2 text-yellow-400" /> },
    { title: "Register", link: "/register", icon: <UserPlus size={18} className="mr-2 text-yellow-400" /> },
  
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-400 tracking-wide">Mandi Darshan</div>

      {/* Hamburger mobile */}
      <button onClick={toggleMenu} className="text-white md:hidden">
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        {menus.map((menu, index) => (
          <div key={index} className="relative group">
            {menu.sub ? (
              <>
                <button className="flex items-center text-white hover:text-yellow-400 transition py-2">
                  {menu.icon} {menu.title}
                </button>
                <div className="absolute left-0  w-56 bg-gray-800 rounded-lg shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                  <ul>
                    {menu.sub.map((item, i) => (
                      <li key={i}>
                        <Link to={item.link} className="flex items-center px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-700 transition">
                          {item.icon} {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link to={menu.link} className="flex items-center text-white hover:text-yellow-400 transition" target={menu.link.startsWith("http") ? "_blank" : "_self"}>
                {menu.icon} {menu.title}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className={`absolute md:hidden top-16 right-6 bg-gray-900 rounded-lg shadow-lg w-64 p-6 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
        {menus.map((menu, index) => (
          <div key={index} className="mb-4">
            <h2 className="flex justify-between items-center text-yellow-400 cursor-pointer" onClick={() => menu.sub ? toggleSubmenu(index) : handleLinkClick()}>
              <span className="flex items-center">
                {menu.icon}
                {menu.link ? (menu.link.startsWith("http") ? (
                  <a href={menu.link} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                    {menu.title}
                  </a>
                ) : (
                  <Link to={menu.link} onClick={handleLinkClick}>{menu.title}</Link>
                )) : menu.title}
              </span>
              {menu.sub && <span>{activeMenu === index ? <Minus size={16} /> : <Plus size={16} />}</span>}
            </h2>
            {menu.sub && (
              <ul className={`mt-2 pl-6 space-y-2 transition-all duration-300 overflow-hidden ${activeMenu === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                {menu.sub.map((item, i) => (
                  <li key={i}>
                    <Link to={item.link} onClick={handleLinkClick} className="flex items-center text-gray-300 hover:text-yellow-400">
                      {item.icon} {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
