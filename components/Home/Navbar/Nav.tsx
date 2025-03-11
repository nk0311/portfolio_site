"use client";
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-20 px-4">
      <div
        className={`bg-[#2d2d2d]/90 backdrop-blur-sm rounded-full transition-all duration-200 py-2 px-6`}
      >
        <div className="flex items-center justify-between w-full max-w-3xl mx-auto">
          {/* LOGO */}
          {/* <Image
            src="/images/logo.png"
            alt="LOGO"
            width={120}
            height={120}
            className="ml-[-1rem] sm:ml-0"
          /> */}
          {/* Nav Links */}
          <div className="flex items-center space-x-6">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p
                  className={`nav__link px-4 py-2 rounded-lg transition-colors duration-200 ${
                    navlink.label === "Home"
                      ? "bg-white text-black"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {navlink.label}
                </p>
              </Link>
            ))}
          </div>
          {/* Burger */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
