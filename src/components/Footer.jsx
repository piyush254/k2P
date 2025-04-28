import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200  font-code">
      <div className="max-w-6xl mx-auto  py-2 flex flex-col md:flex-row justify-between items-center  md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-20 w-20 object-contain mb-2"
          />
          <span className="text-gray-500 text-sm">
            Your gateway to awesome web experiences.
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6">
          <a
            href="#featuress"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            About
          </a>
          <a
            href="#contact-us"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/neovatech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs py-3 border-t border-gray-200">
        © 2025 NeovaTech.in All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
