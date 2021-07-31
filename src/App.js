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
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundImage: `url(${"/home-background.jpeg"})`,
  },
  appBar: {
    paddingRight: "50px",
    fontWeight: "bold",
    // backgroundColor: "rgb(102, 42, 223, 0.5)",
    // backdropFilter: "blur(30px)",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  pageIcon: {
    marginRight: theme.spacing(2),
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
                  ? { color: common.accentColor, fontWeight: "bold" }
                  : { color: "black" };
              return (
                <Button
                  key={`app-bar-button-${pageIndex}`}
                  color="inherit"
                  size="large"
                  style={style}
                  onClick={() => setCurrentPage(page)}
                >
                  {page.name}
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
