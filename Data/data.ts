export const BaseInfo = {
  name: "Navait Kumar",
  position: "Software Engineer",
  description:
    "Hello! I am a passionate software engineer with a strong background in computer science, fueled by a love for innovation and problem-solving. My journey is marked by a blend of technical expertise and creative curiosity, with a focus on building scalable applications that enhance user experiences. I enjoy exploring the intersection of software development and AI, having worked on projects that integrate machine learning models with web applications. Feel free to explore my portfolio and connect with me on LinkedIn!",
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
      skills: [
        "Python",
        "Django",
        "React",
        "TypeScript",
        "AWS",
        "TanStack Query",
      ],
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

export const projectData = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    image: "/images/customer-churn.png",
    github: "https://github.com/nk0311/customer_churn_ml",
    demo: "https://ml-customer-churn-prediction.streamlit.app/",
    description:
      "A machine learning-driven predictive tool designed to empower businesses in identifying customers at risk of churn ",
    technologies: [
      "Python",
      "Numpy",
      "Sklearn",
      "Pandas",
      "Xception-Model",
      "Streamlit",
    ],
  },

  {
    id: 2,
    title: "Brain Tumor Classification",
    image: "/images/brain-tumor-classification.png",
    github: "https://github.com/nk0311/brain_tumor_classification",
    demo: "https://braintumorclassification1.streamlit.app/",
    description:
      "A tool using neural networks for accurate MRI scan classification of various tumors",
    technologies: [
      "Python",
      "Computer Vision",
      "Gemini 2.0",
      "Neural Networks",
      "Transfer Learning",
      "Streamlit",
    ],
  },

  {
    id: 3,
    title: "Codebase RAG",
    image: "/images/codebase-rag.png",
    github: "https://github.com/nk0311/brain_tumor_classification",
    demo: "https://github.com/nk0311/codebase_rag",
    description:
      "An AI Expert over a codebase using Retrieval-Augumented Generation (RAG)",
    technologies: [
      "Python",
      "Grok",
      "Model Inference",
      "Github API",
      "Agents",
      "RAG",
    ],
  },

  {
    id: 4,
    title: "Sutainable AI",
    image: "/images/sustainable.png",
    github: "https://github.com/MoHoThrives/sustAInable",
    demo: "https://braintumorclassification1.streamlit.app/",
    description:
      "Created an AI Chatbot Assistant designed to help users make sustainable life choices. The website is hosted on AWS EC2 Servers and deployed with Amazon Route 53",
    technologies: ["Next.js", "AWS", "OpenAI", "LLMs"],
  },

  {
    id: 5,
    title: "AI Rate my Professor",
    image: "/images/ratemyprof.png",
    github: "https://github.com/nk0311/AI_rate_my_prof",
    demo: "https://talktomyprof.vercel.app/",
    description:
      "A RAG (Retrieval-Augmented Generation) app that delivers AI-driven recommendations for RateMyProfessor utilizes OpenAI embeddings ",
    technologies: [
      "Next.js",
      "Typescript",
      "Firebase",
      "RAG",
      "OpenAI",
      "Vercel",
    ],
  },

  {
    id: 6,
    title: "QuizzMe",
    image: "/images/quizzme.png",
    github: "https://github.com/amalikcraft/Flashcards-Saas",
    demo: "https://quizzme.online/",
    description:
      "Developed a Next.js/React Flashcard app with Firebase, Clerk, and Stripe, featuring AI-powered flashcards via OpenAI integration, hosted on Vercel ",
    technologies: [
      "Next.js",
      "Firebase",
      "Clerk",
      "Stripe",
      "OpenAI",
      "Vercel",
    ],
  },
];

export const skillsData = {
  languages: [
    { id: 8, title: "Python", image: "/images/python.svg" },
    { id: 4, title: "TypeScript", image: "/images/ts.svg" },
    { id: 3, title: "JavaScript", image: "/images/js.svg" },
    { id: 5, title: "HTML", image: "/images/html.svg" },
    { id: 2, title: "CSS", image: "/images/css.svg" },
    { id: 11, title: "SQL", image: "/images/sql.png" },
    { id: 10, title: "C++", image: "/images/cpp.svg" },
  ],
  skills: [
    { id: 1, title: "React", image: "/images/react.svg" },
    { id: 6, title: "Node JS", image: "/images/node.svg" },
    { id: 7, title: "Redis", image: "/images/redis.svg" },
    { id: 9, title: "Firebase", image: "/images/firebase.svg" },
    { id: 12, title: "Langchain", image: "/images/langchain.png" },
    { id: 13, title: "PostgreSQL", image: "/images/postgresql.png" },
    { id: 14, title: "Linux", image: "/images/linux.png" },
    { id: 15, title: "Vercel", image: "/images/vercel.png" },
    { id: 16, title: "Streamlit", image: "/images/streamlit.png" },
    { id: 17, title: "FastAPI", image: "/images/fastapi.svg" },
    { id: 18, title: "Django", image: "/images/django.png" },
    { id: 19, title: "Next.js", image: "/images/nextjs.svg" },
    { id: 20, title: "AWS", image: "/images/aws.svg" },
    { id: 21, title: "Git", image: "/images/git.svg" },
    { id: 22, title: "Material-UI", image: "/images/mui.svg" },
    { id: 23, title: "Postman", image: "/images/postman.svg" },
  ],
};
