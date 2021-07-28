import React from "react";
import { experience } from "../data.js";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  oppositeContent: {
    flex: "none",
  },
  timelineConnector: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <Timeline>
      {experience.map((exp, index) => {
        return (
          <TimelineItem key={`timeline-item-${index}`}>
            <TimelineOppositeContent className={classes.oppositeContent}>
              <br />
              <Typography variant="body2" color="textSecondary">
                {`${exp.fromDate} - ${exp.toDate}`}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {exp.location}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              {index !== experience.length - 1 ? (
                <TimelineConnector className={classes.timelineConnector} />
              ) : (
                ""
              )}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  {exp.jobTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {exp.companyName}
                </Typography>
                <ul>
                  {exp.descriptions.map((description, descriptionIndex) => (
                    <li key={`description-${index}-${descriptionIndex}`}>
                      <Typography variant="body2" color="textSecondary">{description}</Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
