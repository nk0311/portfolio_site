import React, { useState, useEffect } from "react";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";

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
  hackathonWinner?: boolean;
}

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  // Initialize animation state on first render only
  useEffect(() => {
    // Set a small delay before starting animations
    const timer = setTimeout(() => {
      setInitialLoadComplete(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const openProjectDetails = (project: ProjectType) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const navigateProjects = (direction: "next" | "prev") => {
    const increment = direction === "next" ? 1 : -1;
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + increment) % projectData.length;
      return newIndex < 0 ? projectData.length - Math.abs(newIndex) : newIndex;
    });
    setHoveredIndex(currentIndex);
  };

  // Get the three visible projects
  const visibleProjects = () => {
    const projects = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projectData.length;
      projects.push({ ...projectData[index], index });
    }
    return projects;
  };

  const projects = visibleProjects();

  return (
    <div id="projects" className="pt-16 pb-24 bg-[#050709]">
      <div className="container mx-auto px-4">
        <div
          className={`header-animation ${initialLoadComplete ? "active" : ""}`}
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-blue-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400">
            A showcase of some of my favorite work.
          </p>
        </div>

        <div className="featured-projects-container">
          <div className="featured-projects-row">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`project-card ${
                  hoveredIndex === project.index ? "expanded" : ""
                } ${initialLoadComplete ? "load-complete" : ""}`}
                style={{ animationDelay: `${idx * 400}ms` }}
                onClick={() => openProjectDetails(project)}
                onMouseEnter={() => setHoveredIndex(project.index)}
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

                  <div className="absolute bottom-0 left-0 w-full px-6 pb-8">
                    <h3 className="project-title text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {hoveredIndex === project.index && (
                    <div className="absolute bottom-4 right-6">
                      <div className="visit-btn flex items-center justify-center text-white">
                        Visit Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className="nav-btn prev-btn"
            onClick={() => navigateProjects("prev")}
            aria-label="Previous projects"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="nav-btn next-btn"
            onClick={() => navigateProjects("next")}
            aria-label="Next projects"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 modal-animation">
          <div className="bg-[#0f1115] rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4">
              <h2 className="text-3xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeProjectDetails}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
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
              {selectedProject.keyFeatures && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">→</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  TECH STACK
                </h3>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source Code
                </Link>

                {selectedProject.demo && (
                  <Link
                    href={selectedProject.demo}
                    target="_blank"
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
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

        /* Header animation */
        .header-animation {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .header-animation.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Projects container */
        .featured-projects-container {
          position: relative;
          width: 100%;
          height: 500px;
          margin: 30px auto 0;
          overflow: visible;
          padding: 0 60px;
        }

        .featured-projects-row {
          display: flex;
          width: 100%;
          height: 100%;
          gap: 20px;
        }

        /* Project card base styles */
        .project-card {
          flex: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          position: relative;
          cursor: pointer;
          transition: flex 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          height: 100%;

          /* Initial load animation state - only applies before load-complete is added */
          opacity: 0;
          transform: translateY(80px);
          filter: blur(5px);
        }

        /* Animation that occurs only on initial page load */
        .project-card.load-complete {
          animation: loadProject 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes loadProject {
          0% {
            opacity: 0;
            transform: translateY(80px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* Expanded/hover state - this happens when hovering at any time */
        .project-card.expanded {
          flex: 2.5;
        }

        /* Non-expanded cards */
        .project-card:not(.expanded) {
          flex: 0.8;
        }

        /* Project title */
        .project-title {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
          animation: fadeInTitle 0.8s ease forwards;
          animation-delay: 0.8s;
        }

        @keyframes fadeInTitle {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Visit button */
        .visit-btn {
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .project-card.expanded .visit-btn {
          opacity: 1;
        }

        /* Navigation buttons */
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.3);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: background 0.3s ease;
          border: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .nav-btn:hover {
          background: rgba(59, 130, 246, 0.7);
        }

        .prev-btn {
          left: -5px;
        }

        .next-btn {
          right: -5px;
        }

        /* Modal animation */
        .modal-animation {
          animation: modalFadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.98) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .featured-projects-container {
            height: 450px;
            padding: 0 50px;
          }

          .nav-btn {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 768px) {
          .featured-projects-container {
            height: auto;
            padding: 0 40px;
          }

          .featured-projects-row {
            flex-direction: column;
            gap: 20px;
            height: auto;
          }

          .project-card {
            height: 300px;
            margin-bottom: 20px;
          }

          .project-card.expanded,
          .project-card:not(.expanded) {
            flex: 1;
          }

          .nav-btn {
            top: auto;
            bottom: -70px;
            width: 45px;
            height: 45px;
          }

          .prev-btn {
            left: calc(50% - 55px);
          }

          .next-btn {
            right: calc(50% - 55px);
          }
        }
      `}</style>
    </div>
  );
};

export default Project;
