import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "10px",
  },
  image: {
    objectFit: "fill",
    height: "50%",
    mixBlendMode: "multiply",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img
            src="/home-avatar.png"
            alt="what"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textSecondary">
            Hi there,
          </Typography>
          <Typography variant="h3">I AM HIEN LE</Typography>
          <Typography variant="h6">SOFTWARE DEVELOPER</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
