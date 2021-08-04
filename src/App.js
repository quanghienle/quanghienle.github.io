import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Slide } from "@material-ui/core";
import ExperiencePage from "./pages/ExperiencePage.js";
import HomePage from "./pages/HomePage.js";
import { profile, experiences, common } from "./data.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundImage: `url(${"/home-background.jpeg"})`,
  },
  appBar: {
    paddingRight: "50px",
    fontWeight: "bold",
    backgroundColor: common.navbarBackground
    // backgroundColor: "rgb(102, 42, 223, 0.5)",
    // backdropFilter: "blur(30px)",
  },
  title: {
    flexGrow: 1,
    color: 'white',
    fontWeight: "bold",
  },
  pageIcon: {
    marginRight: theme.spacing(2),
  },
  navItem: {
    "&::before, &::after": {
      position: "absolute",
      left: "0px",
      width: "100%",
      height: "1px",
      background: common.navbarText,
      content: "''",
      opacity: 0,
      transition: "all 0.3s"
    },
    "&::before": {
      top: "0px",
      transform: "translateY(10px)"
    },
    "&::after": {
      bottom: "0px",
      transform: "translateY(-10px)"
    },
    "&:hover": {
      "&::after": {
        opacity: 0.6,
        transform: "translateY(-5px)"
      },
      "&::before": {
        opacity: 0.6,
        transform: "translateY(5px)"
      }
    }
  },
  image: {
    height: "64px",
    objectFit: "contain",
    paddingRight: "10px",
  },
}));

const pages = [
  {
    name: "HOME",
    backgroundImage: `url(${"/light-grey-wallpaper.jpeg"})`,
    page: <HomePage {...profile} />,
  },
  {
    name: "ABOUT",
    backgroundImage: `url(${"/light-grey-wallpaper.jpeg"})`,
    page: "",
  },
  {
    name: "EXPERIENCE",
    backgroundImage: `url(${"/light-grey-wallpaper.jpeg"})`,
    page: <ExperiencePage experiences={experiences} />,
  },
  {
    name: "PROJECTS",
    backgroundImage: `url(${"/light-grey-wallpaper.jpeg"})`,
    page: "",
  },
  {
    name: "CONTACT",
    backgroundImage: `url(${"/light-grey-wallpaper.jpeg"})`,
    page: "",
  },
];

export default function App() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = React.useState(pages[0]);
  const [didMount, setDidMount] = React.useState(false);

  React.useEffect(() => {
    if (!didMount) {
      setDidMount(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: currentPage.backgroundImage }}
    >
      <Slide in={didMount} timeout={1500}>
        <AppBar position="static" color="inherit" className={classes.appBar}>
          <Toolbar>
            <img src={common.logo} alt="logo" className={classes.image} />

            <Typography
              variant="h5"
              color="textPrimary"
              className={classes.title}
            >
              {common.appTitle}
            </Typography>

            {pages.map((page, pageIndex) => {
              const style =
                page.name === currentPage.name
                  ? { color: common.navbarSelected, fontWeight: 900 }
                  : { color: common.navbarText };
              return (
                <Button
                  key={`app-bar-button-${pageIndex}`}
                  style={{backgroundColor: common.navbarBackground}}
                  color="inherit"
                  size="large"
                  onClick={() => setCurrentPage(page)}
                >
                  <span style={style} className={classes.navItem} >
                    {page.name}
                  </span>
                </Button>
              );
            })}
          </Toolbar>
        </AppBar>
      </Slide>
      {currentPage.page}
    </div>
  );
}
