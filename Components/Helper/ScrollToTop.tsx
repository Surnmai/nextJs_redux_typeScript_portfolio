"use client";
import { AppDispatch, RootState } from "@/features/store";
import React, { useEffect } from "react";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { setToTop } from "@/features/navSlice";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { isOpen } = useSelector((store: RootState) => store?.nav);
  const dispatch = useDispatch<AppDispatch>();

  //   show and hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      // this will work but I just prefer what is below
      //   if (window.scrollY > 300) {
      //     const scroll = window.scrollY > 300;
      //     dispatch(setToTop(scroll));
      //   } else {
      //     dispatch(setToTop(false));
      //   }

      const scroll = window.scrollY > 300;
      dispatch(setToTop(scroll));
    };

    window.addEventListener("scroll", toggleVisibility);

    // dependency cleanup
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // scroll To Top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-4 right-4 animate-pulse">
      {isOpen && (
        <button
          className="bg-blue-950/60 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
