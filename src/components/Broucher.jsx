import React from "react";

const Broucher = () => {
  return (
    <>
      <section class="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12 bg-white">
        {/* <!-- Brochure Image --> */}
        <div class="max-w-md">
          <img
            src="/path-to-your-image.png"
            alt="Brochure"
            class="w-full h-auto drop-shadow-lg rotate-[-10deg]"
          />
        </div>

        {/* <!-- Download Box --> */}
        <div class="bg-[#4C3004] text-white p-10 rounded-lg max-w-lg text-center">
          <h2 class="text-3xl md:text-4xl font-serif mb-6 leading-tight">
            Download Your E-
            <br />
            Brochure
          </h2>
          <a href="/path-to-your-brochure.pdf" download>
            <button class="mt-4 bg-white text-[#4C3004] font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Download Now
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Broucher;
