import React, { useState } from "react";
import { experienceInfo } from "@/Data/data";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track active experience

  return (
    <div  className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <h2 className="text-center text-4xl font-bold text-gray-200 mb-12">Where I've Worked</h2>

      {/* Navbar for Experiences */}
      <div className="flex justify-center space-x-6 mb-8">
        {experienceInfo.workExperience.map((work, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-lg font-bold text-sm ${
              activeTab === index ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300"
            } transition-all duration-300`}
          >
            {work.company}
          </button>
        ))}
      </div>

      {/* Experience Card */}
      <div className="w-[80%] mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700">
            <img
              src={experienceInfo.workExperience[activeTab].iconPath}
              alt="Company Logo"
              className="w-8 h-8"
            />
          </div>

          {/* Content */}
          <div className="w-full">
            <h3 className="text-xl font-bold text-gray-200">{experienceInfo.workExperience[activeTab].title}</h3>
            <p className="text-sm text-gray-400">
              {experienceInfo.workExperience[activeTab].company} | {experienceInfo.workExperience[activeTab].location}
            </p>
            <p className="text-sm text-gray-400">{experienceInfo.workExperience[activeTab].date}</p>
            <ul className="mt-3 list-disc pl-5 text-base text-gray-500">
              {experienceInfo.workExperience[activeTab].description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {experienceInfo.workExperience[activeTab].skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <h2 className="text-center text-4xl font-bold text-gray-200 mt-20 mb-12">Education</h2>
      <div className="w-[80%] mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4">
          {experienceInfo.education[0].icon} {/* Assuming there's an icon for education */}
        </div>

        {/* Content */}
        {experienceInfo.education.map((edu, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold text-gray-200">{edu.degree}</h3>
            <p className="text-sm text-gray-400">{edu.institution} | {edu.location}</p>
            <p className="text-sm text-gray-400">{edu.date}</p>
            <ul className="mt-3 list-disc pl-5 text-base text-gray-500">
              {edu.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
