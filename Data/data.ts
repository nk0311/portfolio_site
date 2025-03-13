export const BaseInfo = {
  name: "Navait Kumar",
  position: "Software Engineer",
  description: "Hello! I am a passionate software engineer with a strong background in computer science, fueled by a love for innovation and problem-solving. My journey is marked by a blend of technical expertise and creative curiosity, with a focus on building scalable applications that enhance user experiences. I enjoy exploring the intersection of software development and AI, having worked on projects that integrate machine learning models with web applications. Feel free to explore my portfolio and connect with me on LinkedIn!",
  profilePic: "/images/hero.png",
};


export const experienceInfo = {
  workExperience: [
    {
      title: "Software Engineer",
      company: "Outlier AI",
      location: "Remote",
      date: "Dec 2023 - Present",
      description: [
        
        "Architected model evaluation pipelines using LangChain and FastAPI, implementing robust testing frameworks with PyTest and Pydantic for type validation, reducing deployment cycles by 30% across production LLM projects",
        " Developed 100+ REST API endpoints with FastAPI leveraging Elasticsearch and Redis for indexing and caching, serving 50K+ daily requests",
        "Built and optimized CI/CD pipelines on Linux environments using Bash scripting and Docker, resulting in 45% reduction in deployment time and improved system reliability",
        "Developed full-stack features using React and PostgreSQL, implementing real-time data synchronization and analytics dashboards for model performance monitoring across multiple environments",
      ],
      skills: [
        "Python",
        "Langchain",
        "FastAPI",
        "PostgreSQL",
        "React",
        "Redis",
        "Elasticsearch",
      ],
      iconPath: "/images/outlier.png", // Path to the Outlier logo
    },
    {
      title: "Software Engineer Resident",
      company: "Headstarter AI",
      location: "New York, NY",
      date: "Jul 2023 - Present",
      description: [
        
        "Developed 10+ AI web applications using Next.js, OpenAI, Pinecone, and Stripe, driving a 20% increase in user engagement and automating core workflows by implementing API integrations and data pipelines",
        "Implemented Firebase and Clerk authentication, significantly decreasing codebase size, improving system scalability and developer experience",
        "Built and led a team to deliver production-ready code under tight deadlines, deploying high-performance AI applications that boosted customer retention rates by 15% within the first two weeks of launch.",
        
      ],
      skills: [
        "Next.js",
        "Pinecone",
        "Firebase",
        "Agile Development",
        "CI/CD",
        "OpenAI",
      ],
      iconPath: "/images/headstarter.png", // Path to the NASA logo
    },
    {
      title: "Software Engineering Intern",
      company: "Mixspot",
      location: "Remote",
      date: "Jun 2022 - Aug 2022",
      description: [
        "Led full-stack development of a new content management system for short-form video platform, implementing core features using React, TypeScript, and Tailwind UI that improved content upload efficiency by 40% for creators",
        "Architected and developed RESTful API endpoints using Python and Django REST Framework, handling ~10K+ daily requests and reducing average API response time by 65% through query optimizations",
        "Designed and implemented cloud infrastructure using AWS services (EC2, RDS, S3, Lambda, Cognito), resulting in 99.9% system uptime and secure authentication CMS admins",
        "Independently owned and shipped multiple features in a startup environment, including a bulk content scheduling system using TanStack Query that increased creator productivity by 3x and reduced publishing errors by 75%",
      ],
      skills: ["Python", "Django", "React", "TypeScript", "AWS", "TanStack Query"],
      iconPath: "/images/mixspot.png", // Path to the NASA logo
    },
  ],
  education: [
    {
      degree: "Bachelor of Arts in Computer Science",
      institution: "CUNY Hunter College",
      location: "New York, NY",
      date: "Jun 2023",
      details: [
        "Completed courses in Data Structures, Algorithms, Software Engineering, Deep Learning",
      ],
      iconPath: "/images/hunter.png",
    },
  ],
};


export const servicesData = [
  {
    id: 1,
    title: " Web Applications",
    description: "Tailored web apps built with the latest technologies.",
    icon: "/images/s1.png",
  },
  {
    id: 2,
    title: "E-commerce Websites",
    description:
      "Secure online stores with user-friendly shopping and payments.",
    icon: "/images/s2.png",
  },
  {
    id: 3,
    title: "API Integration",
    description:
      "Seamless integration for smooth data sharing and functionality.",
    icon: "/images/s3.png",
  },
  {
    id: 4,
    title: "User Interfaces",
    description:
      "Engaging, responsive front-end designs for better user experiences.",
    icon: "/images/s4.png",
  },
  {
    id: 5,
    title: "Database Solutions",
    description:
      "Efficient and scalable database management for your data needs.",
    icon: "/images/s5.png",
  },
  {
    id: 6,
    title: "Real-Time Features",
    description: "Add live chat, notifications, and real-time data updates.",
    icon: "/images/s6.png",
  },
  {
    id: 7,
    title: "Speed Optimization",
    description: "Boost performance with faster load times and optimization.",
    icon: "/images/s7.png",
  },
  {
    id: 8,
    title: "Website Management",
    description: "Easy content management systems with flexible controls.",
    icon: "/images/s8.png",
  },
];

// export const projectData = [
//   {
//     id: 1,
//     image: "/images/p1.png",
//     url: "https://agency-opal-eight.vercel.app/",
//   },
//   {
//     id: 2,
//     image: "/images/p2.png",
//     url: "https://burger-pearl.vercel.app/",
//   },
//   {
//     id: 3,
//     image: "/images/p3.png",
//     url: "https://game-ecommerce-yt.vercel.app/",
//   },
//   {
//     id: 4,
//     image: "/images/p4.png",
//     url: "https://elearning-yt.vercel.app/",
//   },
//   {
//     id: 5,
//     image: "/images/p5.png",
//     url: "https://invest-peach.vercel.app/",
//   },
//   {
//     id: 6,
//     image: "/images/p6.png",
//     url: "https://job-chi-ruby.vercel.app/",
//   },
//   {
//     id: 7,
//     image: "/images/p7.png",
//     url: "https://wdw-ecom.vercel.app/",
//   },
//   {
//     id: 8,
//     image: "/images/p8.png",
//     url: "https://webhost-ten.vercel.app/",
//   },
// ];

export const projectData = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    image: "/images/customer-churn.png",
    github: "https://github.com/nk0311/customer_churn_ml",
    demo: "https://ml-customer-churn-prediction.streamlit.app/",
    description: "A machine learning-driven predictive tool designed to empower businesses in identifying customers at risk of churn ",
    technologies: ["Python", "Numpy", "Sklearn", "Pandas", "Xception-Model", "Streamlit"],
  },

  {
    id: 2,
    title: "Brain Tumor Classification",
    image: "/images/brain-tumor-classification.png",
    github: "https://github.com/nk0311/brain_tumor_classification",
    demo: "https://braintumorclassification1.streamlit.app/",
    description: "A tool using neural networks for accurate MRI scan classification of various tumors",
    technologies: ["Python", "Computer Vision", "Gemini 2.0", "Neural Networks", "Transfer Learning", "Streamlit"],
  },
  
  {
    id: 3,
    title: "Codebase RAG",
    image: "/images/codebase-rag.png",
    github: "https://github.com/nk0311/brain_tumor_classification",
    demo: "https://github.com/nk0311/codebase_rag",
    description: "An AI Expert over a codebase using Retrieval-Augumented Generation (RAG)",  
    technologies: ["Python", "Grok", "Model Inference", "Github API", "Agents", "RAG"],
  },

  {
    id: 4,
    title: "Codebase RAG",
    image: "/images/brain-tumor-classification.png",
    github: "https://github.com/nk0311/brain_tumor_classification",
    demo: "https://braintumorclassification1.streamlit.app/",
    description: "A tool using neural networks for accurate MRI scan classification of various tumors",
    technologies: ["Python", "Computer Vision", "Gemini 2.0", "Neural Networks", "Transfer Learning", "Streamlit"],
  },

  {
    id: 5,
    title: "Customer Churn Prediction",
    image: "/images/customer-churn.png",
    github: "https://github.com/nk0311/customer_churn_ml",
    demo: "https://ml-customer-churn-prediction.streamlit.app/",
    description: "A machine learning-driven predictive tool designed to empower businesses in identifying customers at risk of churn ",
    technologies: ["Python", "Numpy", "Sklearn", "Pandas", "Xception-Model", "Streamlit"],
  },
];


export const skillsData = [
  {
    id: 1,
    title: "React",
    image: "/images/react.svg",
    percent: "90%",
  },
  {
    id: 2,
    title: "CSS",
    image: "/images/css.svg",
    percent: "97%",
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/images/js.svg",
    percent: "77%",
  },
  {
    id: 4,
    title: "TypeScript",
    image: "/images/ts.svg",
    percent: "67%",
  },
  {
    id: 5,
    title: "HTML",
    image: "/images/html.svg",
    percent: "67%",
  },
  {
    id: 6,
    title: "Node JS",
    image: "/images/node.svg",
    percent: "77%",
  },
  {
    id: 7,
    title: "MongoDB",
    image: "/images/mongo.svg",
    percent: "65%",
  },
  {
    id: 8,
    title: "Python",
    image: "/images/python.svg",
    percent: "55%",
  },
  {
    id: 9,
    title: "Firebase",
    image: "/images/firebase.svg",
    percent: "75%",
  },
  {
    id: 10,
    title: "Vue",
    image: "/images/vue.svg",
    percent: "35%",
  },
];


export const blogs = [
  {
    id: 1,
    title: "Top Web Development Trends to Watch in 2024",
    summary:
      "Explore the key web development trends for 2024 and their impact on your business.",
    date: "August 18, 2024",
    image: "/images/b1.jpg",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Custom Web Application",
    summary:
      "Discover why custom web applications are crucial for driving business growth and efficiency.",
    date: "August 10, 2024",
    image: "/images/b2.jpg",
  },
  {
    id: 3,
    title: "The Importance of Website Speed Optimization",
    summary:
      "Understand how website speed impacts user experience and learn essential optimization tips.",
    date: "July 25, 2024",
    image: "/images/b3.jpg",
  },
];

export const contactData = {
  phone: "+88(012345 789)",
  email: "example@gmail.com",
  address: "Dhaka , Bangladesh",
};
