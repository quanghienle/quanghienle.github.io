import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

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
        margin: "20px 10px",
    },
}));
export default function HomePage(props) {
  const classes = useStyles();
  const { texts, imageUrl, links } = props;

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={7}>
        <img src={imageUrl} alt="avatar" className={classes.image} />
      </Grid>
      <Grid className={classes.info} item xs={5}>
        {texts.map((line, lineIndex) => (
          <Typography key={`info-line-${lineIndex}`} variant={line.variant}>
            {line.text}
          </Typography>
        ))}

        <div className={classes.linkContainer}>
          {links.map((link, linkIndex) => (
            <a
              key={`link-${linkIndex}`}
                className={classes.link}
              href={link.link}
              rel="noreferrer"
              target="_blank"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
