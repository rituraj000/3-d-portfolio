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
  tripguide,
  threejs,
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
    title: "Web Developer",
    company_name: "LearnTricK EduTech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2024 - March 2024",
    points: [
      "Developing and maintaining web applications using Html, CSS, Java Script and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    ],
    image: jobit,
    source_code_link: "https://github.com/rituraj000/IT-Solutions ",
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
        name: "Expree.js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
      
        me: "Node.js",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rituraj000/Task-Manager",
  },
];

export { services, technologies, experiences, testimonials, projects };
