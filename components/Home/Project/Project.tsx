// import SectionHeading from "@/components/Helper/SectionHeading";
// import { projectData } from "@/Data/data";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Project = () => {
//   return (
//     <div id="projects" className="pt-16 pb-16 bg-[#050709]">
//       <SectionHeading>My Projects</SectionHeading>
//       <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
//         {projectData.map((project, i) => {
//           return (
//             <div
//               data-aos="fade-up"
//               data-aos-anchor-placement="top-center"
//               data-aos-delay={`${i * 150}`}
//               key={project.id}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
//             >
//               <Image
//                 src={project.image}
//                 alt="project"
//                 width={300}
//                 height={200}
//                 className="w-full"
//               />
//               <div className="mt-4">
//                 <h3 className="text-lg font-bold text-gray-200">{project.title}</h3>
//                 <p className="text-sm text-gray-400">{project.description}</p>
//                 <p className="text-sm text-gray-400">Technologies: {project.technologies.join(", ")}</p>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   <Link href={project.github} target="_blank" className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded flex items-center gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github">
//                       <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
//                     </svg>
//                     GitHub
//                   </Link>
//                   {project.demo && (
//                     <Link href={project.demo} target="_blank" className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded flex items-center gap-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-play-fill">
//                         <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.5.5 0 0 1 0 .697z"/>
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
//     </div>
//   );
// };

// export default Project;

import React, { useState } from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (index === clickedIndex) {
      setIsClicked(false);
      setClickedIndex(null);
    } else {
      setIsClicked(true);
      setClickedIndex(index);
    }
  };

  const handleOutsideClick = () => {
    setIsClicked(false);
    setClickedIndex(null);
  };

  return (
    <div
      id="projects"
      className="pt-16 pb-16 bg-[#050709] relative"
      onClick={handleOutsideClick}
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project: any, index: number) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${index * 150}`}
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 relative"
              onClick={(e) => {
                e.stopPropagation(); // Prevent outside click handler from triggering
                handleClick(index);
              }}
            >
              <div
                className={`image-container ${
                  index === clickedIndex ? "scale-up" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt="project"
                  width={300}
                  height={200}
                  className="image"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.description}</p>
                {/* <p className="text-sm text-gray-400">Technologies: {project.technologies.join(", ")}</p> */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 py-1 px-3 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-github"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                    GitHub
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-play-fill"
                      >
                        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.5.5 0 0 1 0 .697z" />
                      </svg>
                      Demo
                    </Link>
                  )}
                </div>
              </div>
              {isClicked && index === clickedIndex && (
                <div className="overlay" />
              )}
            </div>
          );
        })}
      </div>
      {isClicked && <div className="global-overlay" />}
      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
        }

        .scale-up {
          transform: scale(2); /* Scale up to twice the original size */
          z-index: 2; /* Ensure it's on top of other elements */
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(20px);
          z-index: 1;
          background-color: rgba(
            0,
            0,
            0,
            0.5
          ); /* Add a background to make the blur visible */
        }

        .global-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(20px);
          z-index: 0;
        }
      `}</style>
    </div>
  );
};

export default Project;
