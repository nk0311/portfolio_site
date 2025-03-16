"use client";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  return (
    <div 
      className={`fixed top-0 right-0 bottom-0 w-[70%] bg-black z-50 transition-transform duration-300 ${
        showNav ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <IoMdClose 
          className="text-white w-8 h-8 cursor-pointer" 
          onClick={closeNav} 
        />
      </div>
      <div className="flex flex-col items-center space-y-8 mt-16">
        <Link href="/#home" onClick={closeNav}>
          <p className="text-white text-xl">Home</p>
        </Link>
        <Link href="/#experience" onClick={closeNav}>
          <p className="text-white text-xl">Experience</p>
        </Link>
        <Link href="/#projects" onClick={closeNav}>
          <p className="text-white text-xl">Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
