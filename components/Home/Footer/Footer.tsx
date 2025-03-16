// import Image from "next/image";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="pt-16 pb-16 bg-black">
//       <p className="text-white text-opacity-60 mt-6 text-center">
//         © 2025 Navait Kumar. All rights reserved.
//       </p>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        {/* Centered social icons */}
        <div className="flex justify-center space-x-8 mb-6">
          <a 
            href="mailto:navaitk031@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full bg-gray-800 p-3 text-white hover:text-blue-500 transition-colors duration-200"
          >
            <FaEnvelope size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/navaitkumar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full bg-gray-800 p-3 text-white hover:text-[#0072b1] transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://github.com/nk0311" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full bg-gray-800 p-3 text-white hover:text-yellow-500 transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://substack.com/@navaitkumar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full bg-gray-800 p-3 text-white hover:text-orange-500 transition-colors duration-200"
          >
            <SiSubstack size={24} />
          </a>
        </div>
        
        {/* Copyright text */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Navait Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
