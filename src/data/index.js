import {
  Pillora,
  PaddleRack,
  KimCloud,
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
    title: "B.S. in Computer Science",
    company_name: "Rice University",
    date: "2023 - 2027",
    details: [
      "<span style='color: white;'>Classes:</span> Algorithms, Discrete Math, Honors Linear Algebra, Computer Systems, Computer Organization, Concurrency, Progam Design, Tools and Models for Data Science",
      "<span style='color: white;'>Clubs:</span> Rice Mens Lacrosse Club, Rice Pickleball Club, Rice Birding Club",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Federal Reserve Board",
    date: "June 2025 - Present",
    details: [
      "Migrated internal application to <span style='color: white;'>AWS GovCloud</span> using <span style='color: white;'>Terraform</span> and <span style='color: white;'>GitLab CI/CD</span> for automated deployments with Docker containers.",
      "Architected private cloud environment with <span style='color: white;'>ECS Fargate</span>, <span style='color: white;'>ECR</span>, <span style='color: white;'>API Gateway</span>, <span style='color: white;'>DynamoDB</span>, and <span style='color: white;'>S3</span> via VPC endpoints.",
      "Implemented security with <span style='color: white;'>IAM roles</span>, security groups, <span style='color: white;'>Load Balancers</span>, and <span style='color: white;'>EC2 bastion hosts</span> for secure VPC access.",
      "Built internal <span style='color: white;'>RAG system</span> using <span style='color: white;'>LangChain</span> and <span style='color: white;'>Chroma DB</span> with <span style='color: white;'>Sentence Transformers</span> for FAME financial data assistant.",
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
    date: "June 2022 - August 2022",
    details: [
      "Integrated JumpCloud with <span style='color: white;'>AWS </span> using <span style='color: white;'>Lambda, Step Functions, and S3</span> to automate device management workflows",
      "Secured API credentials via <span style='color: white;'>Secrets Manager</span> and built data triggers to analyze JumpCloud Insights",
      "Implemented SSO and device management solutions to improve security posture across client systems",
    ],
  }
];

const projects = [
  {
    name: "KimCloud Server",
    description:
      "Built a custom SSH-like client and server in C++ to securely transfer files between computers, implementing version exchange, KEXINIT, Diffie-Hellman key exchange, and a custom file transfer protocol. Designed a multi-threaded architecture with symmetric encryption, MAC integrity checks, and packet framing, deployed in Docker for secure, concurrent sessions.",
    image: KimCloud,
    link: "https://github.com/hosung-k1m/KimCloud",
  },
  {
    name: "Nomad",
    description:
      "Nomad is a travel recommendation platform that suggests personalized city activities to help users immerse themselves in local culture based on their preferences. It features a Swift-based frontend and a serverless AWS backend using Lambda, S3, and DocumentDB. Authentication is handled through OpenAuth for a secure and seamless user experience.",
    image: Nomad,
    link: "https://github.com/chloep23/nomad-frontend",
  },
  {
    name: "Pillora",
    description:
    "Pillora is an AI-powered app that helps users manage and understand their medications with accurate, personalized guidance. Built with React, Node.js, Express, and MongoDB, it leverages OpenAI and FDA APIs to enhance reliability and relevance.",
    image: Pillora,
    link: "https://devpost.com/software/pillora",
  },
  {
    name: "PaddleRack",
    description:
      "PaddleRack is a virtual queue system to manage pickleball court rotations, helping players track turns and court availability in real time. The app features a ReactJS frontend with WebSocket-based live updates, a Node.js RESTful API, and MongoDB for data storage. Hosted on Vercel and Heroku for seamless deployment.",
    image: PaddleRack,
    link: "https://github.com/hosung-k1m/PaddleRack-Frontend",
  },
];

export { experiences, projects };

