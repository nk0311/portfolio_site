// import React from "react";
// import SectionHeading from "@/components/Helper/SectionHeading";
// import { projectData } from "@/Data/data";
// import Image from "next/image";
// import Link from "next/link";

// const Project = () => {
//   return (
//     <div id="projects" className="pt-16 pb-16 bg-[#050709]">
//       <SectionHeading>Projects</SectionHeading>
//       <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
//         {projectData.map((project: any, index: number) => {
//           return (
//             <div
//               data-aos="fade-up"
//               data-aos-anchor-placement="top-center"
//               data-aos-delay={`${index * 150}`}
//               key={project.id}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 relative"
//             >
//               <div className="image-container">
//                 <Image
//                   src={project.image}
//                   alt="project"
//                   width={300}
//                   height={200}
//                   className="image"
//                 />
//               </div>
//               <div className="mt-4">
//                 <h3 className="text-lg font-bold text-gray-200">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-gray-400">{project.description}</p>
//                 {/* <p className="text-sm text-gray-400">Technologies: {project.technologies.join(", ")}</p> */}
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {project.technologies.map((tech: string) => (
//                     <span
//                       key={tech}
//                       className="bg-gray-700 text-gray-300 py-1 px-3 rounded-full text-sm font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-2 mt-2">
//                   <Link
//                     href={project.github}
//                     target="_blank"
//                     className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded flex items-center gap-2"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       viewBox="0 0 16 16"
//                       className="bi bi-github"
//                     >
//                       <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
//                     </svg>
//                     GitHub
//                   </Link>
//                   {project.demo && (
//                     <Link
//                       href={project.demo}
//                       target="_blank"
//                       className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded flex items-center gap-2"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         viewBox="0 0 16 16"
//                         className="bi bi-play-fill"
//                       >
//                         <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.5.5 0 0 1 0 .697z" />
//                       </svg>
//                       Demo
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <style jsx>{`
//         .image-container {
//           position: relative;
//           overflow: hidden;
//           transition: transform 0.3s ease-in-out;
//         }

//         .image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Project;
import React, { useState } from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
// Import these packages - you'll need to install them
// npm install react-slick slick-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Open detailed project view
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Close detailed project view
  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <div id="projects" className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Projects</SectionHeading>
      
      <div className="w-[90%] mx-auto mt-20">
        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={project.id} className="px-4">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay={`${index * 150}`}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-[450px]"
                onClick={() => openProjectDetails(project)}
              >
                <div className="image-container h-[200px] overflow-hidden rounded-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-300 py-1 px-3 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-700 text-gray-300 py-1 px-3 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-blue-400 text-sm">Click to view details</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <button
                  onClick={closeProjectDetails}
                  className="text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
              
              <div className="rounded-lg overflow-hidden mb-6 h-[400px] relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">About this project</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 py-1 px-3 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link
                  href={selectedProject.github}
                  target="_blank"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  View Code
                </Link>
                
                {selectedProject.demo && (
                  <Link
                    href={selectedProject.demo}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.5.5 0 0 1 0 .697z"/>
                    </svg>
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
        }

        /* Additional styles for slick carousel customization */
        :global(.slick-prev),
        :global(.slick-next) {
          z-index: 10;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.7);
        }
        
        :global(.slick-prev) {
          left: -20px;
        }
        
        :global(.slick-next) {
          right: -20px;
        }
        
        :global(.slick-prev:hover),
        :global(.slick-next:hover) {
          background-color: rgba(0, 0, 0, 0.9);
        }
        
        :global(.slick-dots li button:before) {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Project;
