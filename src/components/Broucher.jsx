import React from "react";

const Broucher = ({ id }) => {
  return (
    <>
      <section
        id={id}
        className="w-full bg-[#F5EEDD] py-16 px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-12"
      >
        {/* Download Box */}
        <div className="bg-[#077A7D] text-white p-10 rounded-lg max-w-md text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
            Download Your E-
            <br />
            Brochure
          </h2>
          <a href="/ppt-brochure1.pdf" download>
            <button className="mt-4 bg-white text-[#4C3004] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Download Now
            </button>
          </a>
        </div>

        {/* Brochure Image */}
        {/* <div className="max-w-md">
          <img
            src="/path-to-uploaded-image.png"
            alt="E-Brochure"
            className="w-full h-auto drop-shadow-xl rotate-[-10deg] rounded-lg"
          />
        </div> */}
      </section>
    </>
  );
};

export default Broucher;
