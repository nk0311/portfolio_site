import React, { useState, useEffect } from "react";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";

// Define interface for project structure
interface ProjectType {
  id: number;
  title: string;
  image: string;
  description: string;
  keyFeatures?: string[];
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // New state to toggle between carousel and grid view
  const [showAllProjects, setShowAllProjects] = useState(false);

  const openProjectDetails = (project: ProjectType) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  // Fix the goToPrevious function to update activeIndex
  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Toggle function to switch between views
  const toggleView = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Auto rotate carousel, but only when in carousel mode
  useEffect(() => {
    if (showAllProjects) return; // Don't auto-rotate when in grid view
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isTransitioning, showAllProjects]);

  return (
    <div id="projects" className="pt-16 pb-24 bg-[#050709]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-5xl font-bold text-white mb-2">
              <span className="text-blue-gradient">Projects</span>
            </h2>
            <p className="text-gray-400">A showcase of some of my favorite work</p>
          </div>
          
          {/* See All Toggle Button */}
          <button 
            onClick={toggleView} 
            className="see-all-btn"
          >
            {showAllProjects ? (
              <>
                <span>Back to Carousel</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8z" />
                </svg>
              </>
            ) : (
              <>
                <span>See All Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </>
            )}
          </button>
        </div>
        
        {/* Conditional rendering based on view mode */}
        {showAllProjects ? (
          // Grid view for all projects
          <div className="projects-grid">
            {projectData.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => openProjectDetails(project)}
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl h-[350px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  
                  {/* Project Title */}
                  <div className="absolute bottom-0 left-0 w-full px-6 pb-12">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Visit Project button */}
                  <div className="absolute bottom-4 right-6">
                    <div className="flex items-center justify-center text-white">
                      Visit Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Original 3D Carousel view
          <div className="carousel-container">
            <div className="carousel-stage">
              {projectData.map((project, index) => {
                // Calculate position relative to active index
                const position = (index - activeIndex + projectData.length) % projectData.length;
                return (
                  <div 
                    key={project.id} 
                    className={`carousel-card ${position === 0 ? 'active' : ''}`}
                    style={{
                      transform: getCardTransform(position, projectData.length),
                      zIndex: projectData.length - Math.abs(position),
                      opacity: position === 0 ? 1 : (position === 1 || position === projectData.length - 1) ? 0.7 : 0.4,
                      filter: position === 0 ? 'brightness(1.15) contrast(1.1) saturate(1.25)' : 'blur(1.5px) brightness(0.85) saturate(0.9)'
                    }}
                    onClick={() => {
                      if (position === 0) {
                        openProjectDetails(project);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-xl h-[460px] w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                      
                      {/* Project Title */}
                      <div className="absolute bottom-0 left-0 w-full px-6 pb-12">
                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* Visit Project button */}
                      <div className="absolute bottom-4 right-6">
                        <div className="flex items-center justify-center text-white">
                          Visit Project
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Reflection effect */}
                    <div className="card-reflection"></div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className="carousel-nav-btn prev-btn" 
              onClick={goToPrevious}
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="carousel-nav-btn next-btn" 
              onClick={goToNext}
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicator Dots */}
            <div className="carousel-dots">
              {projectData.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Project Modal - Keep as is */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f1115] rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4">
              <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
              <button
                onClick={closeProjectDetails}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </div>
            
            {/* Project Image */}
            <div className="w-full h-[400px] relative">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            {/* Project Details */}
            <div className="p-6">
              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
              
              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">→</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">TECH STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#2d3748] text-gray-300 py-2 px-4 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={selectedProject.github}
                  target="_blank"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </Link>
                
                {selectedProject.demo && (
                  <Link
                    href={selectedProject.demo}
                    target="_blank"
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Project
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .text-blue-gradient {
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        
        /* See All Button Styles */
        .see-all-btn {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          border-radius: 50px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
          position: relative;
          overflow: hidden;
        }
        
        .see-all-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0));
          transform: skewX(-25deg);
          transition: all 0.75s ease;
        }
        
        .see-all-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.5);
        }
        
        .see-all-btn:hover::before {
          left: 100%;
        }
        
        .see-all-btn:active {
          transform: translateY(-1px);
        }
        
        /* Projects Grid Layout */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          animation: fadeIn 0.5s ease forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .project-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
        }
        
        /* Original Carousel Styles */
        .carousel-container {
          position: relative;
          width: 100%;
          height: 600px;
          margin: 0 auto;
          perspective: 1200px;
        }
        
        .carousel-stage {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        
        .carousel-card {
          position: absolute;
          width: 50%;
          max-width: 550px;
          height: auto;
          left: 0;
          right: 0;
          margin: 0 auto;
          transition: all 0.5s ease;
          cursor: pointer;
          transform-style: preserve-3d;
        }
        
        .carousel-card.active {
          z-index: 10;
          width: 60%;
          max-width: 650px;
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
        }
        
        .card-reflection {
          position: absolute;
          width: 100%;
          height: 20%;
          bottom: -20%;
          left: 0;
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
          transform: rotateX(180deg);
          opacity: 0.3;
          filter: blur(2px);
        }
        
        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.3);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: background 0.3s ease;
        }
        
        .carousel-nav-btn:hover {
          background: rgba(59, 130, 246, 0.7);
        }
        
        .prev-btn {
          left: 20px;
        }
        
        .next-btn {
          right: 20px;
        }
        
        .carousel-dots {
          position: absolute;
          bottom: -30px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        
        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        
        .carousel-dot.active {
          background: #3b82f6;
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .carousel-card {
            width: 85%;
          }
          
          .carousel-card.active {
            width: 95%;
          }
          
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
};

// Keep the helper function for 3D transforms
function getCardTransform(position: number, totalCards: number) {
  if (position === 0) {
    return 'translateZ(120px) scale(1.05)';
  } else if (position === 1) {
    return 'translateX(75%) translateZ(-50px) rotateY(-10deg)';
  } else if (position === totalCards - 1) {
    return 'translateX(-75%) translateZ(-50px) rotateY(10deg)';
  } else if (position < totalCards / 2) {
    return 'translateX(120%) translateZ(-150px) rotateY(-20deg)';
  } else {
    return 'translateX(-120%) translateZ(-150px) rotateY(20deg)';
  }
}

export default Project;
