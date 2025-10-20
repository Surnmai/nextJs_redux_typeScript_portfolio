import React, { useEffect, useRef } from "react";

// import navLinks
import { navLinks } from "@/constants/data";

// import next Link
import Link from "next/link";

// import react icons
import { CgClose } from "react-icons/cg";

// import Redux slice
import { toggleNav, closeMenuBar } from "@/features/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/features/store";

const MobileNav = () => {
  const { toggle } = useSelector((store: RootState) => store?.nav);
  const dispatch = useDispatch<AppDispatch>();

  // react code to close navbar menu on window scroll and click

  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // console.log(e.target);
      if (
        menuRef.current &&
        e.target instanceof Node &&
        !menuRef.current.contains(e.target)
      ) {
        dispatch(closeMenuBar());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  useEffect(() => {
    const closeOnScroll = () => {
      return dispatch(closeMenuBar());
    };

    window.addEventListener("scroll", closeOnScroll);

    return () => {
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, []);

  return (
    <>
      <div className={` sm:hidden`}>
        {/* dark overlay  */}
        <div
          onClick={() => {
            dispatch(closeMenuBar());
          }}
          className={`fixed inset-0 transform transition-all duration-500 right-0 z-40 bg-black opacity-70 w-full h-screen ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>

        {/* navlinks  */}
        <nav
          className={`text-white fixed bottom-0 right-0 flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] bg-cyan-800 space-y-6 z-50 ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              onClick={() => {
                dispatch(closeMenuBar());
              }}
              key={link?.id}
              href={link?.url}
              className="w-fit text-xl ml-12 border-b pb-1 border-white sm:text-[30px]"
            >
              {link?.text}
            </Link>
          ))}
          {/* close icon  */}
          <CgClose
            onClick={() => {
              dispatch(toggleNav());
            }}
            className="text-white z-50 cursor-pointer absolute top-[2.5rem] right-[2rem] sm:w-8 sm:h-8 w-6 h-6"
          />
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
