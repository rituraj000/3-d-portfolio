import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  uplive,
  tripguide,
  threejs,
  ai,
  task, 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "AWADH, IIT ROPAR",
    icon: starbucks,
    iconBg: "#383E56",
    date: "JAN 2024 - Present",
    points: [
      "Developed and maintained the Cloud Sense View web application using React, Node.js, and Express, enabling users to monitor real-time weather station data such as temperature, humidity, wind speed, and direction.",
      "Integrated AWS DynamoDB for efficient storage and retrieval of sensor data, ensuring seamless user authentication, account management, and secure data access through username/password login.",
      "Implemented features allowing users to view available products, manage their subscribed weather stations, and download historical forecast data for up to one month, improving user experience and data accessibility.",
    ],
  },
  {
    title: "Web Developer / Designer",
    company_name: "Oysis Infobyte",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2024 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      " Increased user engagement by 70% through the design and development of user-friendly interfaces",
      " Improved design and optimization skills through hands-on projects, showcasing attention to detail.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ritu raj proved me wrong.",
    name: "Rupam Rani",
    designation: "CEO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ritu raj does.",
    name: "Shivam Singh",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ritu raj optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shantanu Sharma",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "UPLIVE - The Indian Social Media",
    description:
      "A full-stack social networking platform built with the MERN stack and TypeScript, enabling users to share posts, stories, and messages in real time. It features secure authentication (JWT, OTP via Twilio/MSG91), cloud-based media handling (Cloudinary), and instant messaging through Socket.io. The frontend is mobile-first and responsive, powered by React, React Query, and Material-UI for optimized performance and user experience. The app supports role-based access control, in-app notifications, and automated CI/CD deployments via GitHub Actions and Vercel.",
    tags: [
      {
        name: "MERN STACK + TYPESCRIPT",
        color: "blue-text-gradient",
      },
      {
        name: "TWILIO/MSG91",
        color: "green-text-gradient",
      },
      {
        name: "CLOUDINARY",
        color: "pink-text-gradient",
      },
      {
        name: "SOCKET.IO",
        color: "blue-text-gradient",
      },
      {
        name: "REACT QUERY",
        color: "green-text-gradient",
      },
      {
        name: "MATERIAL-UI",
        color: "pink-text-gradient",
      },
    ],
    image: uplive,
    source_code_link:
      "https://github.com/rituraj000/UPLIVE--The-Indian-Social-Media ",
  },
  {
    name: "Task Manager",
    description:
      "Designed and developed a full-stack Task Manager application using Node.js, Express, MongoDB, and React, featuring user authentication, task creation, updating, deletion, and user-specific task views. ",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "JWT Authentication",
        color: "blue-text-gradient",
      },
    ],
    image: task,
    source_code_link: "https://github.com/rituraj000/Task-Manager",
  },

 {
    name: "AI - BOT",
    description:
    "A modern, full-stack AI chat application that delivers a seamless, real-time conversational experience. Built with the latest web technologies and powered by Google's cutting-edge Gemini 2.0 Flash model, Raj Bot demonstrates the integration of sophisticated AI into a polished, production-ready web application.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Type Script",
        color: "green-text-gradient",
      },
      {
        name: "Server-Sent Events (SSE)",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Google Gemini 2.0 Flash",
        color: "blue-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/rituraj000/Ai-Bot",
  },

  {
    name: "IT-Solutions",
    description:
      "IT Solutions project is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to deliver efficient IT services. It incorporates JWT authentication to ensure secure user login and data protection, enhancing the platform's reliability and security. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NODE-JS",
        color: "green-text-gradient",
      },
      {
        name: "EXPRESS",
        color: "pink-text-gradient",
      },
      {
        name: "MONGODB",
        color: "blue-text-gradient",
      },
      {
        name: "JWT Authentication",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rituraj000/IT-Solutions ",
  },

  {
    name: "3-D Portfolio",
    description:
      "A dynamic 3D portfolio built using Three.js, React Three Fiber, TailwindCSS, and Framer Motion, showcasing interactive 3D models, animations, and responsive design. It includes email integration, performance optimizations, and scalable code practices for a professional user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rituraj000/3-d-portfolio ",
  },
];

export { services, technologies, experiences, testimonials, projects };
