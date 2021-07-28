import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import BuildIcon from "@material-ui/icons/Build";
import ContactMailIcon from "@material-ui/icons/ContactMail";

export const pages = [
    {
      name: "HOME",
      icon: (className) => <HomeIcon className={className} />,
      backgroundImage: `url(${"/grey-wallpaper.jpeg"})`,
    },
    {
      name: "EXPERIENCE",
      icon: (className) => <WorkIcon className={className} />,
      backgroundImage: `url(${"/grey-wallpaper.jpeg"})`,
    },
    {
      name: "PROJECTS",
      icon: (className) => <BuildIcon className={className} />,
      backgroundImage: `url(${"/grey-wallpaper.jpeg"})`,
    },
    {
      name: "CONTACT",
      icon: (className) => <ContactMailIcon className={className} />,
      backgroundImage: `url(${"/grey-wallpaper.jpeg"})`,
    },
  ];

export const experience = [
    {
        fromDate: "May 2018",
        toDate: "Dec 2108",
        location: "Ottawa, ON",
        companyName: "CanadaWheels",
        jobTitle: "Software Developer",
        descriptions: [
            "item 1",
            "item 2",
            "item 3",
        ],     
    },
    {
        fromDate: "Sep 2020",
        toDate: "Dec 2020",
        location: "Ottawa, ON (remote)",
        companyName: "Nokia",
        jobTitle: "Software Developer CO-OP",
        descriptions: [
            "Collaborated with back-end developers to add new features to the UI by using TypeScript, React and Redux.",
            "Integrated and configured the backend’s Java application to use log4j as logging mechanism.",
        ],     
    },
    {
        fromDate: "May 2020",
        toDate: "Aug 2020",
        location: "Ottawa, ON (remote)",
        companyName: "Ericsson",
        jobTitle: "Front-End Developer CO-OP",
        descriptions: [
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
        jobTitle: "Teaching Assistant",
        descriptions: [
            "Conducted weekly study groups to guide students through the course materials (COMP3007 - Programming Paradigms).",
            "Graded assignments and tests accurately and submitted students’ marks punctually.",
        ],     
    },
    {
        fromDate: "May 2019",
        toDate: "Dec 2019",
        location: "Ottawa, ON",
        companyName: "Ericsson",
        jobTitle: "Front-End Developer CO-OP",
        descriptions: [
            "Researched for suitable third-party chart libraries to provide top quality design.",
            "Implemented a customizable chart component that visualized the inventory data by using functional programming - ClojureScript.",
            "Wrote automated test scripts for UI components using WebdriverIO framework.",
        ],     
    },
];
