// import { BaseInfo } from "@/Data/data";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { FaDownload } from "react-icons/fa";

// const Hero = () => {
//   const positions = [
//     "Software Engineer",  
//     "Problem Solver",
//     "Lifelong Learner",
//     "Workout Enthusiast",
//     "Car Enthusiast",
  
//   ];

//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   useEffect(() => {
//     let timer: NodeJS.Timeout;

//     const handleTyping = () => {
//       const i = loopNum % positions.length;
//       const fullText = positions[i];

//       setDisplayText(isDeleting 
//         ? fullText.substring(0, displayText.length - 1) 
//         : fullText.substring(0, displayText.length + 1)
//       );

//       setTypingSpeed(isDeleting ? 30 : 150);

//       if (!isDeleting && displayText === fullText) {
//         setTimeout(() => setIsDeleting(true), 500);
//       } else if (isDeleting && displayText === "") {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//       }
//     };

//     timer = setTimeout(handleTyping, typingSpeed);

//     return () => clearTimeout(timer);
//   }, [displayText, isDeleting, loopNum, positions, typingSpeed]);

//   return (
//     <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
//       <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//           {/* Text Content */}
//           <div>
//             {/* Sub Heading */}
//             <h1
//               data-aos="fade-left"
//               className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
//             >
//               I'm {BaseInfo.name}.  and I'm a 
//             </h1>
//             {/* Title with Typing Effect */}
//             <h1
//               data-aos="fade-right"
//               data-aos-delay="100"
//               className="text-bg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem] text-white"
//             >
//               {displayText}
//               <span className="text-blue-500">|</span>
//             </h1>
//             {/* Description */}
//             <p
//               data-aos="fade-left"
//               data-aos-delay="200"
//               className="mt-6 text-sm md:text-base text-white text-opacity-60"
//             >
//               {BaseInfo.description}
//             </p>
//             {/* Button */}
//             <button
//               data-aos="zoom-in"
//               data-aos-delay="300"
//               className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
//             >
//               <span>Download CV</span>
//               <FaDownload />
//             </button>
//           </div>
//           {/* Image content */}
//           <div
//             data-aos="zoom-in"
//             data-aos-delay="400"
//             className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden"
//           >
//             <Image
//               src={BaseInfo.profilePic}
//               alt={BaseInfo.name}
//               width={500}
//               height={500}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import { BaseInfo } from "@/Data/data";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { SiSubstack } from "react-icons/si";

// const Hero = () => {
//   const positions = [
//     "Software Engineer",
//     "Lifelong Learner",
//     "Workout Enthusiast",
//     "Tech Enthusiast",
//     "Problem Solver",
//   ];

//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   useEffect(() => {
//     let timer: NodeJS.Timeout;

//     const handleTyping = () => {
//       const i = loopNum % positions.length;
//       const fullText = positions[i];

//       setDisplayText(isDeleting 
//         ? fullText.substring(0, displayText.length - 1) 
//         : fullText.substring(0, displayText.length + 1)
//       );

//       setTypingSpeed(isDeleting ? 30 : 150);

//       if (!isDeleting && displayText === fullText) {
//         setTimeout(() => setIsDeleting(true), 500);
//       } else if (isDeleting && displayText === "") {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//       }
//     };

//     timer = setTimeout(handleTyping, typingSpeed);

//     return () => clearTimeout(timer);
//   }, [displayText, isDeleting, loopNum, positions, typingSpeed]);

//   return (
//     <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
//       <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//           {/* Text Content */}
//           <div>
//             {/* Sub Heading */}
//             <h1
//               data-aos="fade-left"
//               className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
//             >
//               I am {BaseInfo.name}
//             </h1>
//             {/* Title with Typing Effect */}
//             <h1
//               data-aos="fade-right"
//               data-aos-delay="100"
//               className="text-bg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem] text-white"
//             >
//               {displayText}
//               <span className="text-blue-500">|</span>
//             </h1>
//             {/* Description */}
//             <p
//               data-aos="fade-left"
//               data-aos-delay="200"
//               className="mt-6 text-sm md:text-base text-white text-opacity-60"
//             >
//               {BaseInfo.description}
//             </p>
//             {/* Social Icons */}
//             <div 
//               data-aos="zoom-in"
//               data-aos-delay="300"
//               className="flex justify-start space-x-8 mt-4"
//             >
//               <a 
//                 href="mailto:navaitk031@gmail.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="rounded-full bg-gray-800 p-3 text-white hover:text-yellow-500 transition-colors duration-200"
//               >
//                 <FaEnvelope size={48} />
//               </a>
//               <a 
//                 href="https://www.linkedin.com/in/navaitkumar/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="rounded-full bg-gray-800 p-3 text-white hover:text-yellow-500 transition-colors duration-200"
//               >
//                 <FaLinkedin size={48} />
//               </a>
//               <a 
//                 href="https://github.com/nk0311" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="rounded-full bg-gray-800 p-3 text-white hover:text-yellow-500 transition-colors duration-200"
//               >
//                 <FaGithub size={48} />
//               </a>
//               <a 
//                 href="https://substack.com/@navaitkumar" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="rounded-full bg-gray-800 p-3 text-white hover:text-yellow-500 transition-colors duration-200"
//               >
//                 <SiSubstack size={48} />
//               </a>
//             </div>
//           </div>
//           {/* Image content */}
//           <div
//             data-aos="zoom-in"
//             data-aos-delay="400"
//             className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden"
//           >
//             <Image
//               src={BaseInfo.profilePic}
//               alt={BaseInfo.name}
//               width={500}
//               height={500}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

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
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="bg-gray-900 rounded-3xl p-8 shadow-lg shadow-gray-600">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Text Content */}
            <div>
              {/* Sub Heading */}
              <h1
                data-aos="fade-left"
                className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
              >
                I am {BaseInfo.name}
              </h1>
              {/* Title with Typing Effect */}
              <h1
                data-aos="fade-right"
                data-aos-delay="100"
                className="text-bg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem] text-white"
              >
                {displayText}
                <span className="text-blue-500">|</span>
              </h1>
              {/* Description */}
              <p
                data-aos="fade-left"
                data-aos-delay="200"
                className="mt-6 text-sm md:text-base text-white text-opacity-60 leading-relaxed"
              >
                {BaseInfo.description}
              </p>
              {/* Social Icons */}
              <div 
                data-aos="zoom-in"
                data-aos-delay="300"
                className="flex justify-start space-x-8 mt-4"
              >
                <a 
                  href="mailto:navaitk031@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-3 text-white hover:text-blue-500 transition-colors duration-200"
                >
                  <FaEnvelope size={48} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/navaitkumar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-3 text-white hover:text-[#0072b1] transition-colors duration-200"
                >
                  <FaLinkedin size={48} />
                </a>
                <a 
                  href="https://github.com/nk0311" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-3 text-white hover:text-yellow-500 transition-colors duration-200"
                >
                  <FaGithub size={48} />
                </a>
                <a 
                  href="https://substack.com/@navaitkumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-3 text-white hover:text-orange-500 transition-colors duration-200"
                >
                  <SiSubstack size={48} />
                </a>
              </div>
            </div>
            {/* Image content */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="mx-auto lg:mx-0"
            >
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={500}
                height={500}
                className="rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
