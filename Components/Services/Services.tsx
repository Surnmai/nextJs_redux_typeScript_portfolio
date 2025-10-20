import { services } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <section>
        <h1 className="text-white text-center md:text-4xl xl:text-5xl font-bold">
          Collaborate with brand <br /> and agencies to create
          <br /> impactful results
        </h1>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          // data-aos-delay="200"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20"
        >
          {services.map((service, idx) => (
            <div className="text-center" key={idx}>
              <Image
                className="inline-block"
                src={service?.icon}
                alt="img"
                width={60}
                height={60}
              />
              <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">
                {service?.name}
              </h1>
              <p className="mt-6 text-gray-300">{service?.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
