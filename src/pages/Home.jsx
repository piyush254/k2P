import React, { useState } from "react";
import { motion } from "framer-motion";
import ServicesSection from "../components/services";
import ErrorBoundary from "../components/errorboundary";
import QuoteForm from "../components/Quoteform";
import Technologies from "../components/tech";
import MobileAppSection from "../components/mobile";
import Brochure from "../components/Broucher";

const HomePage = () => {
  const services = [
    "Property Sales",
    "Property Rentals",
    "Property Management",
    "Real Estate Consulting",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleReadMore = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="bg-white text-gray-900 font-code">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center relative w-full overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* You can replace with a real estate video later */}
            <img
              className="w-full h-full object-cover opacity-50 scale-110"
              src="prop.jpg"
              alt="keys2properties"
            />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-4"
            >
              Welcome to Keys2Properties
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-xl max-w-2xl mx-auto py-6"
            >
              Helping You Find Your Dream Home and Smart Investments.
            </motion.p>
            {/* Explore Button */}
            <motion.a
              href="#services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              Explore
            </motion.a>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 px-6 text-center max-w-full mx-auto w-full "
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto text-justify px-4 sm:px-0"
          >
            Keys2Properties is your trusted real estate partner, specializing in
            property sales, rentals, management, and consulting services.
            Whether you're buying your first home, investing in real estate, or
            searching for rental opportunities, we guide you every step of the
            way with professionalism and personalized solutions.
          </motion.p>
        </section>

        {/* Services Section */}
        <div id="featuress">
          <ErrorBoundary>
            <ServicesSection />
          </ErrorBoundary>
        </div>

        {/* Mobile Application / Featured Properties Section */}
        <section className="py-20 px-6 bg-white text-center max-w-5xl mx-auto w-full">
          <ErrorBoundary>
            <MobileAppSection />
          </ErrorBoundary>
        </section>

        {/* Broucher section */}
        <Brochure />
        {/* Contact Section */}
        <div id="contact-us">
          <QuoteForm />
        </div>

        {/* Technologies / Featured Tools Section */}
        <div>
          <ErrorBoundary>
            <Technologies />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
