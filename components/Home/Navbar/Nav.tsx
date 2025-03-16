"use client"
import { navLinks } from "@/constant/constant";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections by their IDs
      const sections = document.querySelectorAll("div[id]");

      // Find which section is currently most visible in the viewport
      let mostVisibleSection = "";
      let maxVisibleHeight = 0;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        if (
          !sectionId ||
          !["home", "experience", "projects"].includes(sectionId)
        )
          return;

        const rect = section.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        // If this section has more visible area than previous maximum
        if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
          maxVisibleHeight = visibleHeight;
          mostVisibleSection = sectionId;
        }
      });

      // Only update if we found a visible section
      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check for active section
    setTimeout(handleScroll, 100); // Small delay to ensure DOM is loaded

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Get the Projects and Experience links from navLinks and arrange them in the desired order
  const projectsLink = navLinks.find((link) => link.label === "Projects");
  const experienceLink = navLinks.find((link) => link.label === "Experience");
  const orderedNavLinks = [projectsLink, experienceLink].filter(
    Boolean
  ) as typeof navLinks;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div>
            <Link href="/#home">
              <p className="text-white text-xl font-semibold hover:text-blue-500 transition-colors duration-200">
                Navait Kumar
              </p>
            </Link>
          </div>

          {/* Desktop Navigation Links - Now using navLinks from constants.ts */}
          <div className="hidden md:flex items-center space-x-8">
            {orderedNavLinks.map((link) => {
              const sectionId = link.url.substring(1); // Remove '#' from url
              return (
                <Link key={link.id} href={link.url}>
                  <div className="relative">
                    <p className="text-white text-lg hover:text-blue-500 transition-colors duration-200">
                      {link.label}
                    </p>
                    {activeSection === sectionId && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
