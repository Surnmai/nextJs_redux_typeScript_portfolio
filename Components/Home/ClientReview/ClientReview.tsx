"use client";

import { clientReview } from "@/constants/data";
import Image from "next/image";
import React from "react";

// import multi Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ClientReview = () => {
  return (
    <>
      <section>
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          Kind words from satisfied <br />
          <span className="text-cyan-200">clients</span>
        </h1>
        {/* carousel  */}
        <Carousel
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {clientReview.map((client) => {
            return (
              <div key={client.name} className="mt-16 text-center">
                <Image
                  src={client.img}
                  alt="image"
                  width={60}
                  height={60}
                  className="rounded-full inline-flex"
                />
                <p className="mt-6 text-base text-gray-200 font-medium">
                  {`"${client.detail}"`}
                </p>
                <h1 className="mt-6 text-xl font-bold text-cyan-200">
                  {client.name}
                </h1>
                <p className="mt-1 text-white">{client.role}</p>
              </div>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default ClientReview;
