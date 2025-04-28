// import React from "react";
// import Slider from "react-slick";
// import {
//   FaLaptopCode,
//   FaPaintBrush,
//   FaMobileAlt,
//   FaCloud,
// } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const services = [
//   {
//     title: "Website Development",
//     icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
//     desc: "We build fast, scalable web apps tailored to your needs using modern frameworks.",
//   },
//   {
//     title: "Web Designing",
//     icon: <FaPaintBrush className="text-4xl text-yellow-500 mb-4" />,
//     desc: "Create stunning, user-friendly website designs that capture attention and drive results.",
//   },
//   {
//     title: "App Development",
//     icon: <FaMobileAlt className="text-4xl text-green-600 mb-4" />,
//     desc: "Develop cross-platform mobile apps that are fast, sleek, and intuitive.",
//   },
//   {
//     title: "Cloud Solutions",
//     icon: <FaCloud className="text-4xl text-purple-600 mb-4" />,
//     desc: "Secure and scalable cloud services to help your business operate efficiently.",
//   },
// ];

// const ServicesSection = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section id="services" className="py-16 px-4 bg-black text-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
//         <p className="text-lg text-center mb-10">
//           Scroll to explore what we offer.
//         </p>

//         <Slider {...sliderSettings}>
//           {services.map((service, index) => (
//             <div key={index} className="px-2">
//               <div className="bg-white text-black rounded-xl shadow-md p-6 min-h-[200px] flex flex-col justify-between transition duration-300 transform hover:scale-105 hover:shadow-xl">
//                 <div className="flex flex-col items-center h-full">
//                   {service.icon}
//                   <h3 className="text-xl font-semibold mt-2 mb-2 text-center">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm text-center">
//                     {service.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React from "react";
import Slider from "react-slick";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Website Development",
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
    desc: "We build fast, scalable web apps tailored to your needs using modern frameworks.",
  },
  {
    title: "Web Designing",
    icon: <FaPaintBrush className="text-4xl text-yellow-500 mb-4" />,
    desc: "Create stunning, user-friendly website designs that capture attention and drive results.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt className="text-4xl text-green-600 mb-4" />,
    desc: "Develop cross-platform mobile apps that are fast, sleek, and intuitive.",
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-4xl text-purple-600 mb-4" />,
    desc: "Secure and scalable cloud services to help your business operate efficiently.",
  },
];

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-1.5rem] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const ServicesSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="services"
      className="py-16 px-4 bg-black text-white relative bg-grad4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-lg text-center mb-10">
          Scroll to explore what we offer.
        </p>

        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <div className="bg-white text-black rounded-xl shadow-md p-6 min-h-[200px] flex flex-col justify-between transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col items-center h-full">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesSection;
