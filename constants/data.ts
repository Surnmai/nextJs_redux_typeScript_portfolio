export const navLinks = [
  { id: 1, url: "#", text: "Home" },
  { id: 2, url: "#", text: "Services" },
  { id: 3, url: "#", text: "Resume" },
  { id: 4, url: "#", text: "Works" },
  { id: 5, url: "#", text: "Skills" },
  { id: 6, url: "#", text: "Testimonials" },
  { id: 7, url: "#", text: "Contact" },
];

// import png images
import imgS1 from "../public/images/s1.png";
import imgS2 from "../public/images/s2.png";
import imgS3 from "../public/images/s3.png";
import imgS4 from "../public/images/s4.png";
export const services = [
  {
    icon: imgS1,
    name: "UI and UX",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: imgS2,
    name: "Web and Mobile App",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: imgS3,
    name: "Design & Creative",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: imgS4,
    name: "Development",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
];

// resume
// import icons
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

export const resume = [
  { Icon: FaCodepen, role: "Full-Stack Developer" },
  { Icon: FaReact, role: "Front-End Developer" },
  { Icon: BsDatabase, role: "Backend Developer" },
  {
    Icon: BiBadge,
    role: "Ghana Communication Technology University",
    date: "Jan 2024 - August 2025",
  },
  {
    Icon: FaReact,
    role: "BSc Computer Science",
    date: "Jan 2024 - August 2025",
  },
  {
    Icon: BiBadge,
    role: "Koforidua Technical University",
    date: "October 2015 - November 2018",
  },
];

// import projects images
import Img1 from "../public/images/p1.jpg";
import Img2 from "../public/images/p2.jpg";
import Img3 from "../public/images/p3.jpg";
import Img4 from "../public/images/p4.jpg";
export const projects = [
  { img: Img1, title: "Modern Finance Dashboard UI", subtext: "Apps , UI/UX" },
  {
    img: Img2,
    title: "Portfolio Website for Creatives",
    subtext: "Branding , Motion",
  },
  {
    img: Img3,
    title: "Brand Identity for Startups",
    subtext: "Branding , UI/UX",
  },
  {
    img: Img4,
    title: "Portfolio Website for Creatives",
    subtext: "Apps , UI/UX",
  },
];

// import icons
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
export const skills = [
  { name: "JavaScript", Icon: SiJavascript, percentage: 89 },
  { name: "React.js", Icon: SiReact, percentage: 92 },
  { name: "Next.js", Icon: SiNextdotjs, percentage: 90 },
  { name: "Node.js", Icon: SiNodedotjs, percentage: 75 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, percentage: 94 },
  { name: "TypeScript", Icon: SiTypescript, percentage: 84 },
];

// import images
import Cimg1 from "../public/images/c1.png";
import Cimg2 from "../public/images/c2.png";
import Cimg3 from "../public/images/c3.png";
import Cimg4 from "../public/images/c4.png";
import Cimg5 from "../public/images/c5.png";
export const clientReview = [
  {
    img: Cimg1,
    name: "Jenny Doe",
    role: "CEO, Landscape",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil perferendis quisquam harum iusto ratione necessitatibus tempora architecto? Ipsam, saepe?",
  },
  {
    img: Cimg2,
    name: "John Doe",
    role: "UI/UX Designer",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil perferendis quisquam harum iusto ratione necessitatibus tempora architecto? Ipsam, saepe?",
  },
  {
    img: Cimg3,
    name: "Jessica Doe",
    role: "CEO, Tech Company",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil perferendis quisquam harum iusto ratione necessitatibus tempora architecto? Ipsam, saepe?",
  },
  {
    img: Cimg4,
    name: "Jora Doe",
    role: "Web Developer",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil perferendis quisquam harum iusto ratione necessitatibus tempora architecto? Ipsam, saepe?",
  },
  {
    img: Cimg5,
    name: "Jara Doe",
    role: "CEO, Design Studio",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil perferendis quisquam harum iusto ratione necessitatibus tempora architecto? Ipsam, saepe?",
  },
];

// blog images  import
import blog1 from "../public/images/b1.jpg";
import blog2 from "../public/images/b2.jpg";
import blog3 from "../public/images/b3.jpg";
export const blog = [
  {
    img: blog1,
    title: "Learn how to build an amazing portfolio website using nextJs",
    date: "5th July 2025",
    tags: [{ tag: "React JS" }, { tag: "Next JS" }, { tag: "Tailwind CSS" }],
  },
  {
    img: blog2,
    title: "Learn how to build an amazing portfolio website using nextJs",
    date: "5th July 2025",
    tags: [{ tag: "React JS" }, { tag: "Next JS" }, { tag: "Tailwind CSS" }],
  },
  {
    img: blog3,
    title: "Learn how to build an amazing portfolio website using nextJs",
    date: "5th July 2025",
    tags: [{ tag: "React JS" }, { tag: "Next JS" }, { tag: "Tailwind CSS" }],
  },
];
