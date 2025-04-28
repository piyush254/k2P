// import React from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper-bundle.css";

// const MobileAppSection = () => {
//   return (
//     <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-teal-800 text-white text-center max-w-6xl mx-auto w-full">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-extrabold mb-6"
//       >
//         Mobile Application Development
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="text-lg mb-8"
//       >
//         Our team crafts cutting-edge mobile apps that engage users and deliver
//         seamless digital experiences. From Android to iOS — we turn your app
//         ideas into reality.
//       </motion.p>

//       {/* Image Slider */}
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000 }}
//         className="mb-12"
//       >
//         <SwiperSlide>
//           <div className="relative">
//             <img
//               src="path-to-your-image-1.jpg"
//               alt="Mobile app design 1"
//               className="w-full h-[350px] object-cover rounded-lg shadow-lg"
//             />
//             <div className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded">
//               Cutting-edge App Design
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="relative">
//             <img
//               src="path-to-your-image-2.jpg"
//               alt="Mobile app design 2"
//               className="w-full h-[350px] object-cover rounded-lg shadow-lg"
//             />
//             <div className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded">
//               Seamless User Experience
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="relative">
//             <img
//               src="path-to-your-image-3.jpg"
//               alt="Mobile app design 3"
//               className="w-full h-[350px] object-cover rounded-lg shadow-lg"
//             />
//             <div className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded">
//               Engaging App Interfaces
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>

//       {/* Call to Action */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         className="mt-10"
//       >
//         <a
//           href="#contact"
//           className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg inline-block transition-all duration-200"
//         >
//           Get In Touch With Us
//         </a>
//       </motion.div>
//     </section>
//   );
// };

// export default MobileAppSection;

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const MobileAppSection = () => {
  return (
    <section className="w-full bg-white text-black py-12 px-6 overflow-hidden ">
      <div className="max-w-full mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6 tracking-tight"
        >
          Web & App Development
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12"
        >
          We create innovative, responsive, and scalable apps tailored for both
          Android and iOS. With a focus on UI/UX and performance, we bring your
          mobile ideas to life.
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
                img: "ui.jpg",
                label: "Modern UI Designs",
              },
              {
                img: "ux.avif",
                label: "Seamless UX Flow",
              },
              {
                img: "tech.jpg",
                label: "Tech-Powered Features",
              },
            ].map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="rounded-xl w-full h-[350px] object-cover shadow-2xl"
                  />
                  <div className="absolute bottom-5 left-5 bg-black/60 text-white px-5 py-2 rounded text-lg font-medium">
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
            Get in Touch With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppSection;
