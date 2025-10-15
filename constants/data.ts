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
