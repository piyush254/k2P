import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] z-50 px-8 py-4 flex justify-between items-center transition-all duration-500
      ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }
      ${
        atTop ? "bg-gray-900" : "bg-black/60 backdrop-blur-md"
      } rounded-full shadow-md`}
    >
      {/* Logo */}
      <div className="sliced-wrapper">
        <div className="sliced top">NeovaTech</div>
        <div className="sliced bottom" aria-hidden="true">
          NeovaTech
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12 text-base font-semibold items-center">
        {["home", "about", "services", "contact-us"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="text-white hover:text-yellow-400 transition-all transform duration-300 hover:scale-105"
            >
              {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
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
          {["home", "about", "services", "contact-us"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-all transform duration-300 hover:scale-105"
              >
                {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
