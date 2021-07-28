import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import BuildIcon from "@material-ui/icons/Build";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ExperiencePage from "./pages/ExperiencePage.js";
import HomePage from "./pages/HomePage.js";

const experiences = [
  {
    fromDate: "May 2021",
    toDate: "Current",
    location: "Ottawa, ON",
    companyName: "CanadaWheels",
    companyLogo: "/canadawheels.jpeg",
    jobTitle: "Software Developer",
    details: ["item 1", "item 2", "item 3"],
  },
  {
    fromDate: "Sep 2020",
    toDate: "Dec 202,",
    location: "Ottawa, ON (remote)",
    companyName: "Nokia",
    companyLogo: "/nokia.png",
    jobTitle: "Software Developer CO-OP",
    details: [
      "Collaborated with back-end developers to add new features to the UI by using TypeScript, React and Redux.",
      "Integrated and configured the backend’s Java application to use log4j as logging mechanism.",
    ],
  },
  {
    fromDate: "May 2020",
    toDate: "Aug 2020",
    location: "Ottawa, ON (remote)",
    companyName: "Ericsson",
    companyLogo: "/ericsson.png",
    jobTitle: "Front-End Developer CO-OP",
    details: [
      "Delivered a Proof of Concept and release of a new UI that configures the telecom network monitoring application at runtime.",
      "Wrote a design doc and implemented shareable UI components and pages that increased reusability, testability, performance and consistency by using JavaScript and Web Components.",
      "Identified, documented code quality issues and created stories for the productization of the new UI.",
    ],
  },
  {
    fromDate: "Jan 2020",
    toDate: "Apr 2020",
    location: "Ottawa, ON (remote)",
    companyName: "Carleton University",
    companyLogo: "/carleton.jpeg",
    jobTitle: "Teaching Assistant",
    details: [
      "Conducted weekly study groups to guide students through the course materials (COMP3007 - Programming Paradigms).",
      "Graded assignments and tests accurately and submitted students’ marks punctually.",
    ],
  },
  {
    fromDate: "May 2019",
    toDate: "Dec 2019",
    location: "Ottawa, ON",
    companyName: "Ericsson",
    companyLogo: "/ericsson.png",
    jobTitle: "Front-End Developer CO-OP",
    details: [
      "Researched for suitable third-party chart libraries to provide top quality design.",
      "Implemented a customizable chart component that visualized the inventory data by using functional programming - ClojureScript.",
      "Wrote automated test scripts for UI components using WebdriverIO framework.",
    ],
  },
];

export const pages = [
  {
    name: "HOME",
    icon: (className) => <HomeIcon className={className} />,
    backgroundImage: `url(${"/grey-wallpaper.jpeg"})`,
      page: <HomePage />,
  },
  {
    name: "EDUCATION",
    icon: (className) => <HomeIcon className={className} />,
    backgroundImage: `url(${"/grey-wallpaper.jpeg"})`,
    page: "",
  },
  {
    name: "EXPERIENCE",
    icon: (className) => <WorkIcon className={className} />,
    backgroundImage: `url(${"/grey-wallpaper.jpeg"})`,
    page: <ExperiencePage experiences={experiences} />,
  },
  {
    name: "PROJECTS",
    icon: (className) => <BuildIcon className={className} />,
    backgroundImage: `url(${"/grey-wallpaper.jpeg"})`,
    page: "",
  },
  {
    name: "CONTACT",
    icon: (className) => <ContactMailIcon className={className} />,
    backgroundImage: `url(${"/grey-wallpaper.jpeg"})`,
    page: "",
  },
];
