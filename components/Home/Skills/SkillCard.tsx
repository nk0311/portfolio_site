// import Image from "next/image";
// import React from "react";

// // define props type
// type Props = {
//   skill: {
//     id: number;
//     title: string;
//     image: string;
//     percent: string;
//   };
// };

// const SkillCard = ({ skill }: Props) => {
//   const { image, percent, title } = skill;
//   return (
//     <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
//       <Image
//         src={image}
//         alt={title}
//         width={80}
//         height={80}
//         className="object-cover mx-auto"
//       />
//       <h1 className="text-[18px] mt-4 text-white font-[600] ">{title}</h1>
//       <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">
//         {percent}
//       </div>
//     </div>
//   );
// };

// export default SkillCard;

// import Image from "next/image";
// import React from "react";

// // Define props type
// type Props = {
//   skill: {
//     id: number;
//     title: string;
//     image: string;
//   };
// };

// const SkillCard = ({ skill }: Props) => {
//   const { image, title } = skill;
//   return (
//     <div className="p-1 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-md bg-gray-900">
//       <Image
//         src={image}
//         alt={title}
//         width={30}
//         height={30}
//         className="object-cover mx-auto"
//       />
//       <h1 className="text-[10px] mt-1 text-white font-[500]">{title}</h1>
//     </div>
//   );
// };

// export default SkillCard;

import Image from "next/image";
import React from "react";

// Define props type
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    category: string; // Add category for languages or technologies
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, title, category } = skill;
  return (
    <div className="p-1 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-md bg-gray-900">
      <Image
        src={image}
        alt={title}
        width={30}
        height={30}
        className="object-cover mx-auto"
      />
      <h1 className="text-[10px] mt-1 text-white font-[500]">{title}</h1>
      <p className="text-[8px] text-gray-400">{category}</p>
    </div>
  );
};

export default SkillCard;
