import { useTranslation } from "react-i18next";
import Hero from "../components/Home/Hero";
import ExperenceMandi from "../components/Home/ExperenceMandi";
import Cities from "../components/Home/Cities";
import Cuisine from "../components/Home/Cuisine";
import Sidebar from "../components/Home/Sidebar";
import Testimonial from "../components/Home/Testimonial";
import ContactUs from "../components/Home/ContactUs";
import PanoramaIframe from "../components/Home/Panorama360"; // correct path

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Sidebar / Navigation */}
      <Sidebar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Experience Mandi / Popular Places */}
      <section id="experience-mandi">
        <ExperenceMandi />
      </section>

      {/* Cuisine Section */}
      <section id="cuisine">
        <Cuisine />
      </section>

      {/* 360° Panorama / Virtual Tour */}
      <section id="panorama-360">
        <PanoramaIframe url="https://360byomaps.netlify.app/" />
      </section>

      {/* Cities / Highlights Section */}
      <section id="cities">
        <Cities />
      </section>

      {/* Testimonials / Feedback */}
      <section id="testimonials">
        <Testimonial />
      </section>

      {/* Contact Us Section */}
      <section id="contact">
        <ContactUs />
      </section>
 <div>
      
      
      {/* Rest of your home page content */}
    </div>
    </div>
  );
}
