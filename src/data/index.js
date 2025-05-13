import {
  Pillora,
  PaddleRack,
  iCloud,
  Nomad,
} from "../assets";

export const navLinks = [
  {
    id: "aboutMe",
    title: "About Me",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Federal Reserve Board",
    date: "June 2025 - Present",
    details: [
      "Something cool here and I'm not sure what to put here, but i need ot make this line longer",
      "something even cooler here",
      "proabbaly somethig not cool here",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Grange Insurance",
    date: "May 2024 - August 2024",
    details: [
      "Built and deployed a <span style='color: white;'> ReactJS </span> web app for insurance agents with Redux state management and Guidewire integration.",
      "Designed and implemented a Policy Review interface for quote finalization",
      "Refactored and tested a <span style='color: white;'>Node.js Express server</span>, boosting test coverage from 5% to 90%",
      "Contributed to R&D on prompt engineering and Retrieval-Augmented Generation (RAG) LLMs for internal AI tools",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "OSA Technology Partners",
    date: "June - August 2022",
    details: [
      "Integrated JumpCloud with <span style='color: white;'>AWS </span> using <span style='color: white;'>Lambda, Step Functions, and S3</span> to automate device management workflows",
      "Secured API credentials via <span style='color: white;'>Secrets Manager</span> and built data triggers to analyze JumpCloud Insights",
      "Implemented SSO and device management solutions to improve security posture across client systems",
    ],
  },
  {
    title: "B.S. in Computer Science",
    company_name: "Rice University",
    date: "2023 - 2027",
    details: [
      "<span style='color: white;'>Classes:</span> Discrete Math, Honors Linear Algebra, Computer Systems, Computer Organization, Progam Design, Tools and Models for Data Science",
      "<span style='color: white;'>Clubs:</span> Rice Mens Lacrosse Club, Rice Pickleball Club",
    ],
  }
];

const projects = [
  {
    name: "Nomad",
    description:
      "Nomad is a travel recommendation platform that suggests personalized city activities to help users immerse themselves in local culture based on their preferences. It features a Swift-based frontend and a serverless AWS backend using Lambda, S3, and DocumentDB. Authentication is handled through OpenAuth for a secure and seamless user experience.",
    image: Nomad,
  },
  {
    name: "Pillora",
    description:
    "Pillora is an AI-powered app that helps users manage and understand their medications with accurate, personalized guidance. Built with React, Node.js, Express, and MongoDB, it leverages OpenAI and FDA APIs to enhance reliability and relevance.",
    image: Pillora,
  },
  {
    name: "iCloud Server",
    description:
      "Hopefully I make something cool here and finish this project",
    image: iCloud,
  },
  {
    name: "PaddleRack",
    description:
      "PaddleRack is a virtual queue system to manage pickleball court rotations, helping players track turns and court availability in real time. The app features a ReactJS frontend with WebSocket-based live updates, a Node.js RESTful API, and MongoDB for data storage. Hosted on Vercel and Heroku for seamless deployment.",
    image: PaddleRack,
  },
];

export { experiences, projects };

