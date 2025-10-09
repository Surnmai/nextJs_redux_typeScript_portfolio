"use client";
import React, { useEffect, useState } from "react";

// Import Rect icons
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

// import constant navlinks
import { navLinks } from "@/constants/data";

// import nextLink
import Link from "next/link";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { setNavBg, toggleNav } from "@/features/navSlice";
import type { AppDispatch, RootState } from "@/features/store";
import MobileNav from "./MobileNav";

// const [navBg, setNavBg] = useState(false)

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       return window.scrollY > 90 ? setNavBg(true) : setNavBg(false);
//     });
//     return window.removeEventListener("scroll", () => {
//       return window.scrollY > 90 ? setNavBg(true) : setNavBg(false);
//     });
//   }, []);

const Nav = () => {
  const { navBg } = useSelector((state: RootState) => state?.nav);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   console.log(navBg);

    //   return window.scrollY > 90
    //     ? dispatch(setNavBg(true))
    //     : dispatch(setNavBg(false));
    // });
    // return window.removeEventListener("scroll", () => {
    //   return window.scrollY > 90
    //     ? dispatch(setNavBg(true))
    //     : dispatch(setNavBg(false));
    // });

    const handleScroll = () => {
      const shouldShowBg = window.scrollY > 90;
      // console.log("ScrollY:", window.scrollY, "Should show bg:", shouldShowBg);
      dispatch(setNavBg(shouldShowBg));
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the exact same function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log(navBg);
  return (
    <header
      className={`${
        navBg ? "bg-navBg shadow-lg" : "bg-transparent"
      } fixed inset-0 w-full h-[12vh] z-40  transition-all duration-500`}
    >
      <div className="container flex justify-between items-center h-full w-full">
        {/* logo  */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            SurNmai
          </h1>
        </div>

        {/* navlinks  */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                key={link?.id}
                href={link?.url}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
              >
                {link?.text}
              </Link>
            );
          })}
        </nav>

        <MobileNav />

        {/* menu buttons  */}
        <div className="flex items-center space-x-4">
          {/* CV button */}
          <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
            <BiDownload className="h-5 w-5" />
            <span>Download CV</span>
          </button>
          {/* menu  */}
          <HiBars3BottomRight
            onClick={() => {
              dispatch(toggleNav());
            }}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
