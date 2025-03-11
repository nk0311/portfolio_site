"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Experience />
      <Project />
      <Skills />
    </div>
  );
};

export default Home;
