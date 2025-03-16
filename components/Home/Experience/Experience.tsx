import React from "react";
import { experienceInfo } from "@/Data/data";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <h2 className="text-center text-4xl font-bold text-gray-200 mb-12">
        Work Experience
      </h2>

      {/* Experience Display - Vertical Layout */}
      <div className="w-[80%] mx-auto">
        {experienceInfo.workExperience.map((work, index) => (
          <div key={index} className="flex items-start mb-20">
            {/* Date Section */}
            <div className="w-[30%] text-gray-400 font-medium text-xl">
              {work.date}
            </div>

            {/* Content Section */}
            <div className="w-[70%]">
              <div className="flex flex-col mb-6">
                {/* Title and Company */}
                <h3 className="text-4xl font-bold text-white mb-1">
                  {work.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src={work.iconPath}
                      alt="Company Logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="text-xl text-gray-300">{work.company}</p>
                </div>
              </div>

              {/* Experience Bullet Points */}
              <div className="space-y-6 mb-8">
                {work.description.map((desc, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-[#0096FF] text-2xl mr-3">»</span>
                    <p className="text-lg text-gray-300">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Skills - Updated to match the dark bluish-gray style */}
              <div className="flex flex-wrap gap-3 mt-6">
                {work.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2 bg-[#2A3441] text-gray-200 rounded-full text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <h2 className="text-center text-4xl font-bold text-gray-200 mt-20 mb-12">
        Education
      </h2>
      <div className="w-[80%] mx-auto">
        {experienceInfo.education.map((edu, index) => (
          <div key={index} className="flex items-start mb-10">
            <div className="w-[30%] text-gray-400 font-medium text-xl">
              {edu.date}
            </div>
            <div className="w-[70%]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#0096FF] flex items-center justify-center">
                  {edu.iconPath ? (
                    <Image
                      src={edu.iconPath}
                      alt="Institution Logo"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              </div>
              <p className="text-lg text-gray-300 mb-3">
                {edu.institution} | {edu.location}
              </p>
              <div className="space-y-4">
                {edu.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-[#0096FF] text-2xl mr-3">»</span>
                    <span className="text-lg text-gray-300">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
