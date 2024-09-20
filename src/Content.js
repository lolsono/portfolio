import figma from "./assets/images/Skills/figma.png";
import javascript from "./assets/images/Skills/javascript.png";
import redux from "./assets/images/Skills/redux.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import sass from "./assets/images/Skills/sass.png";

import project1 from "./assets/images/projects/ohmyfood.png";
import project2 from "./assets/images/projects/avatar2.png";
import project3 from "./assets/images/projects/ninacarducci.png";
import project4 from "./assets/images/projects/avatar4.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { GoPencil } from "react-icons/go";

export const content = {
  
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: GoPencil,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],

  projects: {
    projects_content: [
      {
        title: "OhMyFood",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: project1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: project2,
      },
      {
        title: "Nina Carducci",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: project3,
      },
    ],
  },

  skills: {
    title: "Compétences",
    skills_content: [
      {
        name: "Figma",
        para: "Gestion des maquettes UX/UI",
        logo: figma,
      },
      {
        name: "Redux Toolkit",
        para: "Gestion de l'état dans les applications React",
        logo: redux,
      },
      {
        name: "React",
        para: "Bibliothèque JavaScript pour construire des interfaces utilisateur",
        logo: reactjs,
      },
      {
        name: "JavaScript",
        para: "Rend les pages web interactives et dynamiques",
        logo: javascript,
      },
      {
        name: "Sass",
        para: "Préprocesseur CSS avec des fonctionnalités avancées",
        logo: sass,
      }
      
    ],
    icon: MdArrowForward,
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "felix.ottavi14@gmail.com",
        icon: GrMail,
        link: "mailto:felix.ottavi14@gmail.com",
      },
      {
        text: "06 61 35 07 96",
        icon: MdCall,
        link: "#",
      },
      {
        text: "félix ottavi",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/félix-ottavi",
      },
    ],
  },

};
