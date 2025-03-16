import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

const Hero = () => {
  const positions = [
    "Software Engineer",
    "Lifelong Learner",
    "Workout Enthusiast",
    "Tech Enthusiast",
    "Problem Solver",
  ];

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const i = loopNum % positions.length;
      const fullText = positions[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, positions, typingSpeed]);

  return (
    <div id="" className="w-full pt-[4vh] md:pt-[10vh] h-screen bg-black overflow-hidden relative flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Text Content */}
          <div>
            {/* Sub Heading */}
            <h1 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-3">
              I am {BaseInfo.name}
            </h1>
            
            {/* Title with Typing Effect */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-gradient">{displayText}</span>
              <span className="text-purple-500">|</span>
            </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 text-opacity-80 leading-relaxed mb-8 max-w-2xl">
              {BaseInfo.description}
            </p>
            
            {/* Social Icons - Increased size */}
            <div className="flex space-x-6">
              <a 
                href="mailto:navaitk031@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-full p-4 text-white hover:text-blue-500 transition-colors duration-200"
              >
                <FaEnvelope size={36} />
              </a>
              <a 
                href="https://www.linkedin.com/in/navaitkumar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-full p-4 text-white hover:text-[#0072b1] transition-colors duration-200"
              >
                <FaLinkedin size={36} />
              </a>
              <a 
                href="https://github.com/nk0311" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-full p-4 text-white hover:text-yellow-500 transition-colors duration-200"
              >
                <FaGithub size={36} />
              </a>
              <a 
                href="https://substack.com/@navaitkumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-full p-4 text-white hover:text-orange-500 transition-colors duration-200"
              >
                <SiSubstack size={36} />
              </a>
            </div>
          </div>
          
          {/* Profile Image - Larger with white border */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* White border/contour */}
              <div className="absolute inset-0 rounded-full border-4 border-white"></div>
              
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                fill
                className="rounded-full object-cover"
                style={{ objectPosition: "center top" }} // This helps ensure face is visible
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blue gradient styling */}
      <style jsx>{`
        .text-blue-gradient {
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Hero;
