import React from "react";

const PanoramaIframe = ({ url }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
        Explore 360° Panorama
      </h2>

      <div className="relative w-full max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-shadow duration-500">
        <iframe
          src={url}
          title="360 Panorama"
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] transition-all duration-500"
          allowFullScreen
        />
        {/* Optional overlay for modern effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
      </div>
    </section>
  );
};

export default PanoramaIframe;
