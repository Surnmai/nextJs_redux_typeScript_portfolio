import { blog } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <>
      <section>
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          My latest<span className="text-cyan-200">blogs</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
          {blog.map((blogg, idx) => {
            return (
              <div
                key={idx}
                data-aos="fade-right"
                data-aos-delay={idx * 1000}
                data-aos-anchor-placement="top-center"
              >
                <Image
                  src={blogg.img}
                  alt="blog-img"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">
                  {blogg.date}
                </p>
                <h1 className="md:text-justify md:tracking-tight mt-5 text-lg sm:text-xl font-bold text-white hover:text-cyan-300 cursor-pointer transition-all duration-300">
                  {blogg.title}
                </h1>
                <div className="mt-4 flex gap-2 items-center">
                  {blogg?.tags?.map((tag, idx) => {
                    return (
                      <p
                        key={idx}
                        className="px-4 py-1.5 bg-blue-950 text-white text-xs md:text-sm sm:text-base font-bold rounded-full"
                      >
                        {tag?.tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
