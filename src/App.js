import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { pages } from "./data.js";
import HomePage from "./pages/HomePage.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundSize: "cover",
      backgroundPosition: "center",
    // backgroundImage: `url(${"/home-background.jpeg"})`,
  },
    appBar: {
        paddingRight: "50px",
        paddingLeft: "50px",
    fontWeight: "bold",
      // backdropFilter: "blur(30px)",
    },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  pageIcon: {
    marginRight: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = React.useState(pages[0]);

  return (
      <div className={classes.root} style={{backgroundImage: currentPage.backgroundImage}}>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
              PORFOLIO
          </Typography>
          {pages.map((page, pageIndex) => (
            <Button
              key={`app-bar-button-${pageIndex}`}
                color={page.name === currentPage.name ? "secondary" : "inherit"}
                size="large"
              onClick={() => setCurrentPage(page)}
            >
              {page.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
        <HomePage />
    </div>
  );
}
