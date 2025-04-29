import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      setAtTop(window.scrollY <= 10);

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      // className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] z-50 px-8 py-4 flex justify-between items-center transition-all duration-500
      className={`fixed top-0 left-0 right-0 w-full z-50
      px-8 py-4 flex justify-between items-center transition-all duration-500
      ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }
      ${atTop ? "bg-gray-900" : "bg-black/60 backdrop-blur-md"}
      shadow-md`}
    >
      {/* Logo */}
      {/* hover line style title  */}
      {/* <div className=" flex items-center  justify-center">
        <main className="main-text">Key2Properties</main>
      </div> */}
      <div className=" flex items-center justify-center text-white font-work-sans font-extrabold">
        <main className="text-[3vw] uppercase text-center leading-none fancy">
          Key2Properties
        </main>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12 text-base font-semibold items-center">
        {["home", "about", "services", "brochure", "contact-us"].map((id) => (
          <li key={id} className="relative group">
            <a
              href={id !== "services" ? `#${id}` : undefined}
              className="flex items-center text-white hover:text-yellow-400 transition-all transform duration-300 hover:scale-105 cursor-pointer"
            >
              {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              {id === "services" && (
                <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
              )}
            </a>

            {/* Submenu for Services */}
            {id === "services" && (
              <ul className="absolute top-8 left-0 bg-black bg-opacity-90 backdrop-blur-md rounded-md py-2 w-56 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {[
                  {
                    name: "Residential Properties",
                    link: "#residentialProp",
                  },
                  {
                    name: "Commercial Properties",
                    link: "#commercialProp",
                  },
                  {
                    name: "Industrial Properties",
                    link: "#industrialProp",
                  },
                  { name: "Agricultural Lands", link: "#agriLand" },
                  { name: "Farm Houses", link: "#farmHouse" },
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.link}
                      className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-gray-800 transition-all"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="fixed top-20 inset-x-0 bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-col space-y-6 items-center pt-8 text-lg z-50 transition-all duration-300">
          {["home", "about", "services", "brochure", "contact-us"].map((id) => (
            <li key={id} className="w-full text-center">
              {id === "services" ? (
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full hover:text-yellow-400 transition-all transform duration-300 hover:scale-105"
                  >
                    {id
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </button>
                  {isServicesOpen && (
                    <ul className="flex flex-col space-y-2 mt-2">
                      {[
                        {
                          name: "Residential Properties",
                          link: "#residentialProp",
                        },
                        {
                          name: "Commercial Properties",
                          link: "#commercialProp",
                        },
                        {
                          name: "Industrial Properties",
                          link: "#industrialProp",
                        },
                        { name: "Agricultural Lands", link: "#agriLand" },
                        { name: "Farm Houses", link: "#farmHouse" },
                      ].map((service, index) => (
                        <li key={index}>
                          <a
                            href={service.link}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 hover:text-yellow-400 transition-all"
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-yellow-400 transition-all transform duration-300 hover:scale-105"
                >
                  {id
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
