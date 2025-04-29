import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Luxury Villas",
    image:
      "https://img.icons8.com/?size=100&id=ETkL78XWuDdG&format=png&color=000000",
  },
  {
    name: "Modern Apartments",
    image:
      "https://img.icons8.com/?size=100&id=8Zy0wuM4j6fb&format=png&color=000000",
  },
  {
    name: "Commercial Spaces",
    image:
      "https://img.icons8.com/?size=100&id=ZSxxlHhMGpll&format=png&color=000000",
  },
  {
    name: "Property Management",
    image:
      "https://img.icons8.com/?size=100&id=FYXRDHzA04lT&format=png&color=000000",
  },
  {
    name: "Real Estate Investment",
    image: "https://img.icons8.com/?size=100&id=19999&format=png&color=000000",
  },
  {
    name: "Custom Build Services",
    image: "https://img.icons8.com/?size=100&id=64043&format=png&color=000000",
  },
];

const RealEstateServices = () => {
  return (
    <section className="bg-grad4 py-16 px-6 md:px-16 font-code">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Our Real Estate Services
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className=" flex flex-col items-center justify-center bg-zinc-900 rounded-xl p-4 shadow-md hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.name}
              // className="w-16 h-16 object-contain mb-3 fill-white"
              className="w-16 h-16 object-contain mb-3 "
            />
            <p className="text-white font-medium text-center">{service.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RealEstateServices;
