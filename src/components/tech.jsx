import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Luxury Villas",
    image: "https://cdn-icons-png.flaticon.com/512/3077/3077120.png",
  },
  {
    name: "Modern Apartments",
    image: "https://cdn-icons-png.flaticon.com/512/702/702814.png",
  },
  {
    name: "Commercial Spaces",
    image: "https://cdn-icons-png.flaticon.com/512/2665/2665570.png",
  },
  {
    name: "Property Management",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    name: "Real Estate Investment",
    image: "https://cdn-icons-png.flaticon.com/512/2331/2331949.png",
  },
  {
    name: "Custom Build Services",
    image: "https://cdn-icons-png.flaticon.com/512/679/679720.png",
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
            className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl p-4 shadow-md hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-white font-medium text-center">{service.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RealEstateServices;
