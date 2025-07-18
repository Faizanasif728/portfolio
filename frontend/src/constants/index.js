
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  fantasticfour,
  project2,
  project3,
  postgresql,
  express,
  firebase,
  canva,
  cloudinary,
  drawio,
  lucidchart,
  mindview,
  msoffice,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import knowledgeStreams from "../assets/company/knowledgeStreams.png";


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
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "framer",
    icon: framer,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Cloudinary",
    icon: cloudinary,
  },
  {
    name: "Draw.io",
    icon: drawio,
  },
  {
    name: "Lucidchart",
    icon: lucidchart,
  },
  {
    name: "MindView",
    icon: mindview,
  },
  {
    name: "MS Office",
    icon: msoffice,
  },
 

];

const experiences = [
  {
    title: "Mern-Stack Trainee",
    company_name: "Knowledge streams",
    icon: knowledgeStreams,
    iconBg: "#383E56",
    date: "01 July 2024 - 30 September 2024",
    points: [
      "Gained hands-on experience in web development through MERN stack training at Knowledge Streams.",
      "Strengthened core technical skills by building real-world projects with a focus on practical learning.",
      "Improved problem-solving abilities and encouraged innovation through continuous coding challenges.",
      "Developed soft skills like teamwork, communication, leadership, and time management via group projects",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Faizan proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Faizan does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Faizan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Custom Crave",
    description:
      "Custom Crave meal planner is a web-based platform that helps users in Pakistan, generate personalized meal plans based on local dietary needs, preferences, and goals, delivering a smart and customized nutritional experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/Faizanasif728/planner",
    live_demo_link: "https://custom-crave-meal-planner.onrender.com",
  },
  {
    name: "Streamify",
    description:
      "Streamify is a web-based platform build using MERN stack for seamless movie streaming and content management. Whether you're a casual viewer or a movie lover, enjoy secure access, search features, and personalized content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: fantasticfour,
    source_code_link: "https://github.com/faizanasif728/stream",
    live_demo_link: "https://streamify-platform.onrender.com",
  },
  {
    name: "Forever.",
    description:
      "Forever - ecommerce is your ultimate destination for premium products across various categories like topwear, and bottomwear. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Faizanasif728/ecommerce",
    live_demo_link: "https://forever-ecommerce-a5wu.onrender.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
