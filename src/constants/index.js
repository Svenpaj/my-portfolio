import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  jensen,
  java,
  python,
  filmvis,
  maxsite,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Test Developer",
    icon: creator,
  },
  {
    title: "CI/CD Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
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
    title: "JAVA",
    company_name: "Jensen Education",
    icon: jensen,
    iconBg: "#FFFFFF",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Account for syntax of the language Java.",
      "Explain and use OOP and being able to solve bigger problems and different solution alternatives.",
      "Account for all standard libraries and how to use them to solve problems.",
      "Account for different frameworks.",
    ],
  },
  {
    title: "Python",
    company_name: "Jensen Education",
    icon: jensen,
    iconBg: "#FFFFFF",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Account for syntax of the language Python.",
      "Understand what type of datastructures and data-types is needed for various projects.",
      "Explain and use methods to build large Python programs in handable and reuseable units with help of modules, classes and functions.",
      "Build interactive Python programs with both text-based and GUI-based.",
    ],
  },
  {
    title: "Database",
    company_name: "Jensen Education",
    icon: jensen,
    iconBg: "#FFFFFF",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Being able to model, formulate, and implement a database using different methods for data modeling and database design.",
      "Explain different types of database systems and their structure.",
      "Explain and use the SQL query language. Use interrogative language to formulate questions.",
      "Build and use REST-API.",
    ],
  },
  {
    title: "Agile Systemdevelopment and projects within Devops",
    company_name: "Jensen Education",
    icon: jensen,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products. Using agile methods such as SCRUM.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Infrastructure / Server Backend & CD",
    company_name: "Jensen Education",
    icon: jensen,
    iconBg: "#FFFFFF",
    date: "Mar 2023 - Present",
    points: [
      "Knowledge in planning, designing, installing and configuring infrastructure solutions. Inclides both Windows and Linux-based infrastructure services and know how a secure infrastrucutre is built and automated.",
      "Explain and use different types of cloud services.",
      "Understand virtualization.",
      "Apply methods to plan, design, install, and configure infrastructure solutions with Node.JS, Apache, Nginx, PHP and docker.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Max proved me wrong.",
    name: "Hampus Molin",
    designation: "DevOps in development",
    company: "Jensen DevOps",
    image:
      "https://media.licdn.com/dms/image/D4E35AQFIjCRbSjvxBw/profile-framedphoto-shrink_800_800/0/1662414587067?e=1679155200&v=beta&t=KMVnxWl7w_ayl6vORDn2LNzwmAUlR6uA-g4mURlUqao",
  },
  {
    testimonial:
      "A good teamplayer that helps out when needed. He provides good and direct feedback to progress a project forward.",
    name: "Hanway Tran",
    designation: "DevOps in development",
    company: "Jensen DevOps",
    image:
      "https://media.licdn.com/dms/image/C5603AQG_xBpBp9C62w/profile-displayphoto-shrink_800_800/0/1516534890263?e=1683763200&v=beta&t=fdiLNblO0kmZS75LIjxgieuLN3Qwbj0-eGU2nFNFhwY",
  },
];

const projects = [
  {
    name: "Filmvisarna",
    description:
      "Web-based platform that allows users to search and book tickets for cinema.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: filmvis,
    source_code_link: "https://github.com/emanueljg/filmvisarna",
  },
  {
    name: "Portfolio",
    description:
      "Portfolio website using react.js and three.js with 3D models.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "yellow-text-gradient",
      },
    ],
    image: maxsite,
    source_code_link: "https://github.com/svenpaj",
  },
];

export { services, technologies, experiences, testimonials, projects };
