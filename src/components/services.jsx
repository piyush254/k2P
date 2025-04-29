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
    serviceId: "residentialProp",
    title: "Residential Properties",
    image: "serviceResidentialProp.png",
    desc: "Find your perfect home, from new developments to resale properties.",
  },
  {
    serviceId: "commercialProp",
    title: "Commercial Properties",
    image: "serviceCommercialProp.webp",
    desc: "Explore commercial spaces for businesses of all sizes and industries.",
  },
  {
    serviceId: "industrialProp",
    title: "Industrial Properties",
    image: "serviceIndustrialProp.jpg",
    desc: "Industrial properties designed to suit your production and storage needs.",
  },
  {
    serviceId: "agriLand",
    title: "Agricultural Lands",
    image: "serviceAgriLand.jpg",
    desc: "Expansive agricultural lands perfect for farming and investment.",
  },
  {
    serviceId: "farmHouse",
    title: "Farm Houses",
    image: "servicefarmhouse.jpeg",
    desc: "Escape to nature with our collection of serene and peaceful farmhouses.",
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
    <section className="py-16 px-4 bg-black text-white relative bg-grad4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-lg text-center mb-10">
          Explore a wide range of properties tailored to your needs – from
          residential homes and commercial spaces to industrial sites,
          agricultural lands, and farmhouses. Whether new or resale, we have the
          perfect fit for you.
        </p>
        {/* Service Sections */}
        {services.map((service, index) => (
          <div
            key={index}
            id={service.serviceId}
            className="flex flex-col md:flex-row items-center mb-12"
          >
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

////////////////////////////////////////////////
{
  /* <Slider {...sliderSettings}>
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
  </Slider> */
}
