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
  galeri,
  bingkai,
  pintar,
  weld,
} from "../../assets";
export const langnya = "Langue";
export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "project",
    title: "Projet",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const about = {
  hero: "N'essayez jamais de vous arrêter<br />Et ne vous arrêtez jamais pour essayer.",
  hero_tag: "Le meilleur est le suivant",
  home: "Je suis Développeur Fullstack",
  home_tag:
    "Je développe des visuels 3D, des interfaces utilisateurs <br /> des applications web et des Mobile Apps",

  tag: "INTRODUCTION",
  title: "Aperçu",
  detail:
    "Je suis un développeur de logiciels qualifié avec une expérience en TypeScript et JavaScript, et une expertise dans des frameworks comme Nextjs, React, Node.js, Laravel, Angular, Ionic, Codeigniter, Wordpress et Three.js.",
};
const services = [
  {
    title: "Développeur web",
    icon: web,
  },
  {
    title: "Développeur frontal",
    icon: mobile,
  },
  {
    title: "Développeur back-end",
    icon: backend,
  },
  {
    title: "Créateur de contenu",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
export const exdata = {
  sub: "CE QUE J'AI FAIT JUSQU'ICI",
  title: "L'expérience professionnelle",
};
const experiences = [
  {
    title: "Née",
    company_name: "Bekasi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Janvier 1986",
    points: ["Né à la périphérie de Bekasi Regency près de Karawang."],
  },
  {
    title: "École primaire",
    company_name: "SDN TANJUNG BARU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "1992 - 1998",
    points: ["SD Outre Rails, précisément SDN Tanjung Baru."],
  },
  {
    title: "Lycée",
    company_name: "SMPN 2 LEMAHABANG",
    icon: shopify,
    iconBg: "#383E56",
    date: "1998 - 2001",
    points: ["L'école est encore proche des rails, à savoir SMPN 2 LEMAHABANG"],
  },
  {
    title: "école professionnelle",
    company_name: "SMKN 1 KARAWANG",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2001 - 2004",
    points: [
      "Une école célèbre pour sa STM, pour la spécialisation en machines-outils, qui étudie le génie du soudage, les machines de tour",
    ],
  },
  {
    title: "Employé du secteur privé",
    company_name: "PT. TMMIN",
    icon: weld,
    iconBg: "#E6DEDD",
    date: "2004 - Maintenant",
    points: [
      "2004-2012 Le travail commence en devenant opérateur d'assemblage de voitures dans la section Underbody Welding Body Production",
      "2012-2014 Membre de l'équipe senior Underbody Assy",
      "2014-2015 Project Kijang Innova Reborn et All New Fortuner",
      "2015-2016 Chef d'équipe soubassement Encopa Innova Fortuner",
      "2016-2017 Comité d'activité du CQS",
      "2018-2020 Projet Slim Compact Line",
      "2020-2022 Production de stabilisants à Pandemi Corona",
      "2022-2023 Projet Kijang Innova Zenit",
      "2023- ... Le meilleur est le suivant",
    ],
  },
];
export const datatest = {
  title: "Témoignages",
  sub: "Ce que disent les autres",
};
const testimonials = [
  {
    testimonial:
      "L'atelier a été vraiment utile, il a ajouté des connaissances, surtout pour moi qui n'étais qu'un débutant. En attendant le prochain atelier !!",
    name: "Sheila Nurliza",
    designation: "SMK",
    company: "Bekasi",
    image: "https://webdev.nufat.id/assets/img/testimonial-3.jpg",
  },
  {
    testimonial:
      "Nous espérons que cet atelier sera cohérent afin qu'à la fin nous puissions le réaliser car la mission de The Best is The Next One.",
    name: "Supandi",
    designation: "Media",
    company: "HalloSUkabumi",
    image: "https://webdev.nufat.id/assets/img/testimonial-2.jpg",
  },
  {
    testimonial:
      "Je suis très reconnaissant à M. Nunu pour les connaissances qu'il a transmises hier soir, concernant la discussion sur html et bootstrap",
    name: "Mas Hengki",
    designation: "SMK",
    company: "JAMBI",
    image: "https://webdev.nufat.id/assets/img/testimonial-1.jpg",
  },
];
export const datapro = {
  title: "Projets",
  sub: "Découvrez les projets web que je développe",
};
const projects = [
  {
    name: "Nufat.id",
    description:
      "Portail Web Dernières nouvelles et informations mises à jour et fiables",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "MariaDB",
        color: "green-text-gradient",
      },
      {
        name: "Costume",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://nufat.id/",
  },
  {
    name: "Webdev.Nufat.id",
    description:
      "Développement de sites Web d'apprentissage avec la méthode Learning by Doing",
    tags: [
      {
        name: "nuPHP",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://webdev.nufat.id/",
  },
  {
    name: "Bungtemin.net",
    description:
      "Le site Web de LEM SPSI PT TMMIN Media Team est un portail d'information sur les syndicats",
    tags: [
      {
        name: "NuPHP",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://Bungtemin.net/",
  },
  {
    name: "Gallery.Bungtemin.net",
    description:
      "Site Web Collection d'images et de photos pouvant être téléchargées",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: galeri,
    source_code_link: "https://Gallery.Bungtemin.net/",
  },
  {
    name: "Foto Bingkai",
    description:
      "Site Web pour télécharger des photos avec des cadres photo attrayants",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bingkai,
    source_code_link: "https://imgapi.nufat.id/",
  },
  {
    name: "Perpustakaan Pdf",
    description: "Un livre intelligent pdf accessible partout et à tout moment",
    tags: [
      {
        name: "NuPHP",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pintar,
    source_code_link: "https://Bungtemin.net/perpustakaan",
  },
];
export const datakontak = {
  title: "Contact",
  ynama: "votre nom",
  ynama_sub: "Quel est ton bon nom?",
  yemail: "Votre e-mail",
  yemail_sub: "Quelle est votre adresse e-mail?",
  pesan: "Votre message",
  ypesan: "Ce que vous voulez dire?",
  kirim: "Envoyer",
  mekirim: "Envoi en cours...",
};

export { services, technologies, experiences, testimonials, projects, about };
