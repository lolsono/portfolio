// icone pour la partie skill
import figma from "./assets/images/Skills/figma.png";
import javascript from "./assets/images/Skills/javascript.png";
import redux from "./assets/images/Skills/redux.png";
import reactjs from "./assets/images/Skills/react.png";
import sass from "./assets/images/Skills/sass.png";

// image pour la partie porjet
import project1 from "./assets/images/projects/ohmyfood.webp";
import project2 from "./assets/images/projects/kasa.webp";
import project3 from "./assets/images/projects/ninacarducci.webp";

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
        para: "Projet visant à réaliser des animations et des interactions avec les utilisateurs en utilisant HTML et Sass.",
        logo: project1,
        link: "https://github.com/lolsono/Ohmyfood_ottavi_felix"
      },
      {
        title: "Kasa",
        para: "Projet de conception d'un site de location d'appartements, visant à gérer l'intégration des informations via une base de données avec JavaScript.",
        logo: project2,
        link: "https://github.com/lolsono/kasa"
      },
      {
        title: "Nina Carducci",
        para: "Nina Carducci est également un projet de site d'une photographe freelance que nous avons optimisé pour les performances SEO.",
        logo: project3,
        link: "https://github.com/lolsono/ninacarducci"
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
        para: "gestion de l'état dans les applications React",
        logo: redux,
      },
      {
        name: "React js",
        para: "bibliothèque JavaScript pour construire des interfaces utilisateur",
        logo: reactjs,
      },
      {
        name: "Javascript ",
        para: "JavaScript rend les pages web interactives et dynamiques.",
        logo: javascript,
      },
      {
        name: "Sass",
        para: "un préprocesseur CSS qui ajoute des fonctionnalités avancées",
        logo: sass,
      },
    ],
    icon: MdArrowForward,
  },

  Contact: {
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
