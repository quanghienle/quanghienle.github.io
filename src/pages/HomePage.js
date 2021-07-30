import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Zoom, Grow, Slide, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 100px)",
  },
  info: {
    margin: "auto",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  link: {
    padding: "10px",
  },
  linkContainer: {
    margin: "20px 60px",
  },
  profileName: {
    fontWeight: "bold",
    color: "#7717F6",
  },
}));

export default function HomePage(props) {
  const classes = useStyles();
  const { name, title, imageUrl, links } = props;
  const [didMount, setDidMount] = React.useState(false);

  React.useEffect(() => {
    if (!didMount) {
      setDidMount(true);
    }
  });

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={7}>
        <Slide direction="right" in={didMount} timeout={1000}>
          <img src={imageUrl} alt="avatar" className={classes.image} />
        </Slide>
      </Grid>
      <Grid className={classes.info} item xs={5}>
        <Grow in={didMount} timeout={1500}>
          <Typography variant="h6" color="textSecondary"> Hi there, </Typography>
        </Grow>
          <br/>
        <Grow in={didMount} timeout={1500}>
          <Typography variant="h2">
            {"I am "}
            <span className={classes.profileName}> {name} </span>
          </Typography>
        </Grow>
          <br/>
        <Grow in={didMount} timeout={1500}>
          <Typography variant="h5"> {title} </Typography>
        </Grow>
          <br/>

        <div className={classes.linkContainer}>
          {links.map((link, linkIndex) => (
            <Zoom key={`link-${linkIndex}`} in={didMount} timeout={2000}>
              <Button href={link.link}>{link.icon}</Button>
            </Zoom>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
