import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const common = {
  logo: "/logo-white.png",
  appTitle: "HL",
  accentColor: "#5c5c8a",
  navbarBackground: "#5c5c8a",
  navbarText: "rgb(255,255,255,0.5)",
  navbarSelected: "white"

};

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
    toDate: "Dec 2020",
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

const profile = {
  name: "Hien Le",
  title: "Software Developer",
  imageUrl: "/home-avatar.png",
  links: [
    {
      name: "LinkedIn",
      icon: (
        <LinkedInIcon style={{ fontSize: "60px", color: common.accentColor }} />
      ),
      link: "https://www.linkedin.com/in/quanghienle/",
    },
    {
      name: "GitHub",
      icon: (
        <GitHubIcon style={{ fontSize: "50px", color: common.accentColor }} />
      ),
      link: "https://github.com/quanghienle",
    },
  ],
};

export { profile, experiences, common };
