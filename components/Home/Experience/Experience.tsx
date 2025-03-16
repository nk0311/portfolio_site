// import React, { useEffect } from "react";
// import { experienceInfo } from "@/Data/data";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Experience = () => {
//   // Container animation - controls the overall section
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   };

//   // Animation for each experience block
//   const experienceBlockVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.15
//       }
//     }
//   };

//   // Animation for individual elements - much slower reveal
//   const elementVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   // Animation for bullet points - even more staggered
//   const bulletVariants = {
//     hidden: { opacity: 0, x: -5 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.4 }
//     }
//   };

//   return (
//     <div id="experience" className="pt-16 pb-16 bg-[#050709]">
//       <div className="container mx-auto px-4">
//         {/* Work Experience Section Heading */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-5xl font-bold text-white mb-2">
//             <span className="text-blue-gradient">Work Experience</span>
//           </h2>
//           <p className="text-gray-400 mb-12">My professional journey and roles</p>
//         </motion.div>

//         {/* Experience Display - Vertical Layout with Line-by-Line Animation */}
//         <motion.div
//           className="w-[80%] mx-auto"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           {experienceInfo.workExperience.map((work, index) => (
//             <motion.div
//               key={index}
//               className="flex items-start mb-20"
//               variants={experienceBlockVariants}
//             >
//               {/* Date Section */}
//               <motion.div
//                 className="w-[30%] text-gray-400 font-medium text-xl"
//                 variants={elementVariants}
//               >
//                 {work.date}
//               </motion.div>

//               {/* Content Section */}
//               <div className="w-[70%]">
//                 <div className="flex flex-col mb-6">
//                   {/* Title - now smaller */}
//                   <motion.h3
//                     className="text-2xl font-bold text-white mb-3"
//                     variants={elementVariants}
//                   >
//                     {work.title}
//                   </motion.h3>

//                   {/* Company with Logo */}
//                   <motion.div
//                     className="flex items-center gap-2"
//                     variants={elementVariants}
//                   >
//                     <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
//                       <Image
//                         src={work.iconPath}
//                         alt="Company Logo"
//                         width={24}
//                         height={24}
//                       />
//                     </div>
//                     <p className="text-xl text-gray-300">{work.company}</p>
//                   </motion.div>
//                 </div>

//                 {/* Experience Bullet Points - Individual Animation */}
//                 <div className="space-y-6 mb-8">
//                   {work.description.map((desc, idx) => (
//                     <motion.div
//                       key={idx}
//                       className="flex items-start"
//                       variants={bulletVariants}
//                     >
//                       <span className="text-[#0096FF] text-2xl mr-3">»</span>
//                       <p className="text-lg text-gray-300">{desc}</p>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Skills - Group Animation */}
//                 <motion.div
//                   className="flex flex-wrap gap-3 mt-6"
//                   variants={elementVariants}
//                 >
//                   {work.skills.map((skill, idx) => (
//                     <span
//                       key={idx}
//                       className="px-5 py-2 bg-[#2A3441] text-gray-200 rounded-full text-base"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Education Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="mt-20"
//         >
//           <h2 className="text-5xl font-bold text-white mb-2">
//             <span className="text-blue-gradient">Education</span>
//           </h2>
//           <p className="text-gray-400 mb-12">Academic background and qualifications</p>
//         </motion.div>

//         <motion.div
//           className="w-[80%] mx-auto"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           {experienceInfo.education.map((edu, index) => (
//             <motion.div
//               key={index}
//               className="flex items-start mb-10"
//               variants={experienceBlockVariants}
//             >
//               <motion.div
//                 className="w-[30%] text-gray-400 font-medium text-xl"
//                 variants={elementVariants}
//               >
//                 {edu.date}
//               </motion.div>

//               <div className="w-[70%]">
//                 <motion.div
//                   className="flex items-center gap-2 mb-2"
//                   variants={elementVariants}
//                 >
//                   <div className="w-8 h-8 rounded-full bg-[#0096FF] flex items-center justify-center">
//                     {edu.iconPath ? (
//                       <Image
//                         src={edu.iconPath}
//                         alt="Institution Logo"
//                         width={24}
//                         height={24}
//                       />
//                     ) : (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path d="M12 14l9-5-9-5-9 5 9 5z" />
//                         <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                       </svg>
//                     )}
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
//                 </motion.div>

//                 <motion.p
//                   className="text-lg text-gray-300 mb-3"
//                   variants={elementVariants}
//                 >
//                   {edu.institution} | {edu.location}
//                 </motion.p>

//                 <div className="space-y-4">
//                   {edu.details.map((detail, idx) => (
//                     <motion.div
//                       key={idx}
//                       className="flex items-start"
//                       variants={bulletVariants}
//                     >
//                       <span className="text-[#0096FF] text-2xl mr-3">»</span>
//                       <span className="text-lg text-gray-300">{detail}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       <style jsx>{`
//         .text-blue-gradient {
//           background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           text-fill-color: transparent;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Experience;
import React from "react";
import { experienceInfo } from "@/Data/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  // Container animation - controls the overall section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation for each experience block
  const experienceBlockVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  // Animation for individual elements - much slower reveal
  const elementVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Animation for bullet points - even more staggered
  const bulletVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div id="experience" className="pt-16 pb-16 bg-[#050709]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Work Experience Section Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-blue-gradient">Experience</span>
          </h2>
          <p className="text-gray-400">My professional journey and roles</p>
        </motion.div>

        {/* Experience Display - Vertical Layout with Line-by-Line Animation */}
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {experienceInfo.workExperience.map((work, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start mb-20"
              variants={experienceBlockVariants}
            >
              {/* Date Section */}
              <motion.div
                className="w-full md:w-[30%] text-gray-400 font-medium text-xl mb-4 md:mb-0"
                variants={elementVariants}
              >
                {work.date}
              </motion.div>

              {/* Content Section */}
              <div className="w-full md:w-[70%]">
                <div className="flex flex-col mb-6">
                  {/* Title - now smaller */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-3"
                    variants={elementVariants}
                  >
                    {work.title}
                  </motion.h3>

                  {/* Company with Logo */}
                  <motion.div
                    className="flex items-center gap-2"
                    variants={elementVariants}
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                      <Image
                        src={work.iconPath}
                        alt="Company Logo"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="text-xl text-gray-300">{work.company}</p>
                  </motion.div>
                </div>

                {/* Experience Bullet Points - Individual Animation */}
                <div className="space-y-6 mb-8">
                  {work.description.map((desc, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start"
                      variants={bulletVariants}
                    >
                      <span className="text-[#0096FF] text-2xl mr-3">»</span>
                      <p className="text-lg text-gray-300">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Skills - Group Animation */}
                <motion.div
                  className="flex flex-wrap gap-3 mt-6"
                  variants={elementVariants}
                >
                  {work.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-2 bg-[#2A3441] text-gray-200 rounded-full text-base"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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

export default Experience;
