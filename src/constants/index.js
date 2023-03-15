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
    id: "project",
    title: "Project",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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

const experiences = [
  {
    title: "Lahir",
    company_name: "Bekasi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Januari 1986",
    points: ["Terlahir di pinggiran Kabupaten Bekasi mendekati Karawang."],
  },
  {
    title: "Sekolah Dasar",
    company_name: "SDN TANJUNG BARU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "1992 - 1998",
    points: ["SD Disamping Rel tepatnya SDN Tanjung Baru."],
  },
  {
    title: "Sekolah Menengah Pertama",
    company_name: "SMPN 2 LEMAHABANG",
    icon: shopify,
    iconBg: "#383E56",
    date: "1998 - 2001",
    points: ["Sekolah masih deket Rel yaitu SMPN 2 LEMAHABANG"],
  },
  {
    title: "Sekolah Menegah Kejuruan",
    company_name: "SMKN 1 KARAWANG",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2001 - 2004",
    points: [
      "Sekolah yang terkenal dengan STM, untuk jurusan mesin perkakas, yang mempelajari Teknik Welding / Pengelasan, Mesin Bubut, Freis",
    ],
  },
  {
    title: "Karyawan Swasta",
    company_name: "PT. TMMIN",
    icon: weld,
    iconBg: "#E6DEDD",
    date: "2004 - Sekarang",
    points: [
      "2004-2012 Bekerja dimulai dengan menjadi operator perakitan mobil dibagian Underbody Welding Body Production",
      "2012-2014 Senior Team Member Underbody Assy",
      "2014-2015 Project Kijang Innova Reborn dan All New Fortuner",
      "2015-2016 Team Leader Underbody Encopa Innova Fortuner",
      "2016-2017 QCC Aktivity Commite",
      "2018-2020 Project Slim Compact Line",
      "2020-2022 Stabiliser Production in Pandemi Corona",
      "2022-2023 Project Kijang Innova Zenit",
      "2023- ... The best is The Next One",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "workshop itu bermanfaat bgt ya nambah pengetahuan apalagi untuk saya yang baru pemula. Di tunggu untuk workshop yang selanjutnya!!",
    name: "Sheila Nurliza",
    designation: "SMK",
    company: "Bekasi",
    image: "https://webdev.nufat.id/assets/img/testimonial-3.jpg",
  },
  {
    testimonial:
      "Semoga acara workshop ini istiqomah hingga akhirnya kami bisa merealisasikaannya seagai misi the Best is The Next One.",
    name: "Supandi",
    designation: "Media",
    company: "HalloSUkabumi",
    image: "https://webdev.nufat.id/assets/img/testimonial-2.jpg",
  },
  {
    testimonial:
      "saya sangat berterimakasih kepada pak nunu atas ilmu yang di sampaikan buat kemarin malem, tentang pembahasan html, dan bootstrap",
    name: "Mas Hengki",
    designation: "SMK",
    company: "JAMBI",
    image: "https://webdev.nufat.id/assets/img/testimonial-1.jpg",
  },
];

const projects = [
  {
    name: "Nufat.id",
    description:
      "Web Portal Berita dan informasi terkini yang update dan terpecaya",
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
      "Pembelajaran Development Website dengan methode Learning by Doing",
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
      "Website Tim Media LEM SPSI PT TMMIN portal berita seputar Serikat Pekerja",
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
    description: "Website Kumpulan image yang dan foto yang bisa di upload",
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
      "Website untuk mengupload foto dengan foto bingkai yang manrik",
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
    description: "Buku pintar pdf yang bisa diakses dimana saja dan kapan saja",
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

export { services, technologies, experiences, testimonials, projects };
