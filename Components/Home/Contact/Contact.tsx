import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Text content   */}
          <div className="flex-1 text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
              Schedule a call with me to see if I can help
            </h1>
            <p className="text-gray-400 mt-6 text-base sm:text-lg">
              Reach out to me and let's discuss how I can help your goals.
            </p>

            {/* contact  */}
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              className="mt-7"
            >
              <div className="flex items-center space-x-3 mb-4">
                <BiPhone className="w-9 h-9 text-cyan-300" />
                <p>+233201482244</p>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <BiEnvelope className="w-9 h-9 text-cyan-300" />
                <p>nmaitech@outlook.com</p>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <BiMap className="w-9 h-9 text-cyan-300" />
                <p>Accra, Ghana</p>
              </div>
            </div>

            {/* socials  */}
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              className="flex items-center mt-8 space-x-3"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
                <FaFacebook className="text-white w-6 h-6" />
              </div>
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-red-600 transition-all duration-300">
                <FaYoutube className="text-white w-6 h-6" />
              </div>
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300">
                <FaTwitter className="text-white w-6 h-6" />
              </div>
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300">
                <FaInstagram className="text-white w-6 h-6" />
              </div>
            </div>
          </div>

          {/* form  */}
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            className="flex-1 text-white bg-formMain md:p-10 p-5 rounded-lg"
          >
            <input
              type="text"
              placeholder="Name"
              className="mt-6 px-4 py-3.5 bg-formBg text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <input
              type="email"
              placeholder="Email"
              className="mt-6 px-4 py-3.5 bg-formBg text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <input
              type="text"
              placeholder="Phone"
              className="mt-6 px-4 py-3.5 bg-formBg text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <textarea
              placeholder="Your message"
              className="mt-6 px-4 py-3.5 bg-formBg text-white outline-none rounded-md w-full h-[10rem] placeholder:text-white/70"
            ></textarea>
            <button className="mt-6 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
