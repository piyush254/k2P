import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const options = [
  "Website Development",
  "Mobile Application",
  "Web Hosting Services",
  "Web Designing",
  "Graphics Design",
];

const QuoteForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    email: "",
    message: "",
    interestedIn: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "default_service", //default service id
        "template_x3h6rbs",
        {
          first_name: form.firstName,
          last_name: form.secondName,
          user_email: form.email,
          message: form.message,
          service: form.interestedIn,
        },
        "EYm6nAzxeKdJuwVNH" //public
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({
            firstName: "",
            secondName: "",
            email: "",
            message: "",
            interestedIn: "",
          });
        },
        (error) => {
          console.error("FAILED to send message:", error);
          alert("Message failed to send, please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-customBlue via-grad2 via-grad3 to-grad4 flex items-center justify-center py-8 font-code">
      <motion.div
        className="max-w-xl w-full bg-white rounded-sm shadow-xl p-10  border-blue-950"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-700 via-teal-600 to-gray-600 text-transparent bg-clip-text">
          Contact Us!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[45%]">
              <label className="block text-gray-400 font-semibold mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg border-teal-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-600 bg-gray-700 text-white px-4 py-2 transition-all outline-none"
                required
              />
            </div>
            <div className="flex-1 min-w-[45%]">
              <label className="block text-gray-400 font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="secondName"
                placeholder="Last Name"
                value={form.secondName}
                onChange={handleChange}
                className="w-full border rounded-lg border-teal-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-600 bg-gray-700 text-white px-4 py-2 transition-all outline-none"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex-1 min-w-[45%]">
              <label className="block text-gray-400 font-semibold mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg border-teal-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-600 bg-gray-700 text-white px-4 py-2 transition-all outline-none"
                required
              />
            </div>

            <div className="flex-1 min-w-[45%] relative">
              <label className="block text-gray-400 font-semibold mb-2">
                Interested In<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <select
                  name="interestedIn"
                  value={form.interestedIn}
                  onChange={handleChange}
                  className="appearance-none w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white border-2 border-teal-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-400 transition-all ease-in-out duration-300 cursor-pointer hover:shadow-xl"
                  required
                >
                  <option value="" disabled className="text-gray-500">
                    Select a service
                  </option>
                  {options.map((option, idx) => (
                    <option
                      key={idx}
                      value={option}
                      className="bg-gray-800 hover:bg-teal-600 transition-all"
                    >
                      {option}
                    </option>
                  ))}
                </select>

                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-400 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message please ..."
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg border-teal-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-600 bg-gray-700 text-white px-4 py-2 transition-all outline-none min-h-[80px]"
            />
          </div>
          <div className="mt-8 text-center">
            <motion.button
              type="submit"
              className="bg-grad2 hover:bg-grad4 text-white font-bold px-10 py-3 rounded-xl shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              SUBMIT
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default QuoteForm;
