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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after a small delay to trigger animations
    const loadTimer = setTimeout(() => setIsLoaded(true), 300);
    
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    let timer;

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
      {/* Background animated gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`w-full h-full opacity-20 transition-opacity duration-1500 ${isLoaded ? 'opacity-20' : 'opacity-0'}`}>
          <div className="animate-pulse-slow absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-500 blur-[150px]"></div>
          <div className="animate-pulse-slow-delay absolute top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-purple-500 blur-[150px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Text Content */}
          <div>
            {/* Sub Heading */}
            <h1 className={`text-2xl md:text-3xl text-gray-300 font-semibold mb-3 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              I am {BaseInfo.name}
            </h1>
            
            {/* Title with Typing Effect */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <span className="text-blue-gradient">{displayText}</span>
              <span className="text-purple-500 animate-blink">|</span>
            </h1>
            
            {/* Description */}
            <p className={`text-base md:text-lg text-gray-300 text-opacity-80 leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-400 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {BaseInfo.description}
            </p>
            
            {/* Social Icons with crazy animations */}
            <div className={`flex space-x-6 transition-all duration-700 delay-600 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <a 
                href="mailto:navaitk031@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`icon-container bg-gray-800 rounded-full p-4 text-white hover:text-blue-500 hover:scale-110 hover:rotate-12 transition-all duration-300 ${isLoaded ? 'animate-email-in' : 'opacity-0'}`}
              >
                <FaEnvelope size={36} />
              </a>
              <a 
                href="https://www.linkedin.com/in/navaitkumar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`icon-container bg-gray-800 rounded-full p-4 text-white hover:text-[#0072b1] hover:scale-110 hover:translate-y-[-5px] transition-all duration-300 ${isLoaded ? 'animate-linkedin-in' : 'opacity-0'}`}
              >
                <FaLinkedin size={36} />
              </a>
              <a 
                href="https://github.com/nk0311" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`icon-container bg-gray-800 rounded-full p-4 text-white hover:text-yellow-500 hover:scale-110 hover:rotate-[360deg] transition-all duration-500 ${isLoaded ? 'animate-github-in' : 'opacity-0'}`}
              >
                <FaGithub size={36} />
              </a>
              <a 
                href="https://substack.com/@navaitkumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`icon-container bg-gray-800 rounded-full p-4 text-white hover:text-orange-500 hover:scale-120 transition-all duration-300 ${isLoaded ? 'animate-substack-in' : 'opacity-0'}`}
              >
                <SiSubstack size={36} />
              </a>
            </div>
          </div>
          
          {/* Profile Image - Larger with white border */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] transform transition-transform duration-300 hover:scale-105">
              {/* White border/contour with glow */}
              <div className="absolute inset-0 rounded-full border-4 border-white animate-glow"></div>
              
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                fill
                className="rounded-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional styles for animations */}
      <style jsx>{`
        .text-blue-gradient {
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }

        .transition-opacity {
          transition-property: opacity;
        }

        .duration-1500 {
          transition-duration: 1500ms;
        }
        
        .delay-200 {
          transition-delay: 200ms;
        }
        
        .delay-400 {
          transition-delay: 400ms;
        }
        
        .delay-500 {
          transition-delay: 500ms;
        }
        
        .delay-600 {
          transition-delay: 600ms;
        }
        
        .hover\\:scale-120:hover {
          transform: scale(1.2);
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 0 25px rgba(255, 255, 255, 0.5); }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }

        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }

        .animate-pulse-slow-delay {
          animation: pulseSlow 8s ease-in-out 4s infinite;
        }
        
        /* Crazy Icon Animations */
        .icon-container {
          opacity: 0;
        }

        @keyframes emailIn {
          0% { 
            transform: translate(-100px, 50px) rotate(-180deg); 
            opacity: 0;
          }
          60% { 
            transform: translate(10px, -10px) rotate(20deg); 
            opacity: 1;
          }
          80% { 
            transform: translate(-5px, 5px) rotate(-10deg); 
          }
          100% { 
            transform: translate(0, 0) rotate(0); 
            opacity: 1;
          }
        }

        .animate-email-in {
          animation: emailIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: 0.8s;
        }

        @keyframes linkedinIn {
          0% { 
            transform: translateY(100px) scale(0); 
            opacity: 0;
          }
          60% { 
            transform: translateY(-15px) scale(1.2); 
            opacity: 1;
          }
          80% { 
            transform: translateY(10px) scale(0.9); 
          }
          100% { 
            transform: translateY(0) scale(1); 
            opacity: 1;
          }
        }

        .animate-linkedin-in {
          animation: linkedinIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: 1.1s;
        }

        @keyframes githubIn {
          0% { 
            transform: translateX(100px) rotate(180deg) scale(2); 
            opacity: 0;
          }
          50% { 
            transform: translateX(-20px) rotate(-30deg) scale(1.1); 
            opacity: 1;
          }
          75% { 
            transform: translateX(10px) rotate(15deg) scale(0.95); 
          }
          100% { 
            transform: translateX(0) rotate(0) scale(1); 
            opacity: 1;
          }
        }

        .animate-github-in {
          animation: githubIn 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: 1.4s;
        }

        @keyframes substackIn {
          0% { 
            transform: translate(50px, -150px) scale(0.5); 
            opacity: 0;
          }
          40% { 
            transform: translate(-10px, 30px) scale(1.3); 
            opacity: 1;
          }
          60% { 
            transform: translate(5px, -15px) scale(0.9); 
          }
          80% { 
            transform: translate(-2px, 5px) scale(1.1); 
          }
          100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 1;
          }
        }

        .animate-substack-in {
          animation: substackIn 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: 1.7s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
