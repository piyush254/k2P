import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const RealEstateSection = () => {
  return (
    <section className="w-full bg-white text-black py-12 px-6 overflow-hidden">
      <div className="max-w-full mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6 tracking-tight"
        >
          Discover Your Dream Property
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12"
        >
          Explore luxury homes, modern apartments, and commercial spaces crafted
          for comfort and style. Find the perfect place to call your own with
          us.
        </motion.p>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            className="w-full md:w-4/5 mx-auto mb-14"
          >
            {[
              {
                img: "luxury-villa.png",
                label: "Elegant Villas",
              },
              {
                img: "modern-apartment.jpeg",
                label: "Modern Apartments",
              },
              {
                img: "commercial-space.jpeg",
                label: "Premium Commercial Spaces",
              },
            ].map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="rounded-xl w-full h-[400px] object-cover shadow-2xl"
                  />
                  <div className="absolute bottom-5 left-5 bg-black/70 text-white px-5 py-2 rounded text-lg font-medium">
                    {item.label}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact-us"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:scale-105 transition-transform duration-300"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstateSection;
