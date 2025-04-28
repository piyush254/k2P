import React from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Next.js",
    image: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png",
  },
  {
    name: "HTML5",
    image: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    name: "CSS3",
    image: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  {
    name: "Python",
    image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  {
    name: "Appwrite",
    image: "https://avatars.githubusercontent.com/u/52372568?s=280&v=4",
  },
  {
    name: "Firebase",
    image: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
  },
  {
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "FLutter",
    image: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
  },
];

const Technologies = () => {
  return (
    <section className="bg-grad4 py-16 px-6 md:px-16 font-code ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Technologies We Use
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl p-4 shadow-md hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-white font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
