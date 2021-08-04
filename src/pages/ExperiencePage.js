import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";
import { Typography, Avatar, Zoom, Fade } from "@material-ui/core";
import { common, experiences } from "../data";
import ExpandableCard from "../components/ExpandableCard.js";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "20px",
    margin: 0,
  },
  oppositeContent: {
    flex: "none",
    width: "150px",
  },
  timelineConnector: {
    backgroundColor: common.navbarBackground,
  },
  timelineDot: {
    padding: 0,
    backgroundColor: common.navbarBackground,
  },
}));

export default function ExperiencePage() {
  const classes = useStyles();
  const [didMount, setDidMount] = React.useState(false);

  React.useEffect(() => {
    if (!didMount) {
      setDidMount(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Timeline className={classes.main}>
      {experiences.map((exp, index) => {
        const delay1 = index * 200;
        const delay2 = index * 400;
        const transitionProps = (delay) => ({
          in: didMount,
          timeout: 1000,
          style: { transitionDelay: `${delay}ms` },
        });

        return (
          <TimelineItem key={`timeline-item-${index}`}>

            {/* Left side of the timeline */}
            <TimelineOppositeContent className={classes.oppositeContent}>
              <Fade {...transitionProps(delay2)}>
                <Typography variant="body2" color="textSecondary">
                  {`${exp.fromDate} - ${exp.toDate}`}
                  <br />
                  {exp.location}
                </Typography>
              </Fade>
            </TimelineOppositeContent>


            {/* timeline dots and connectors */}
            <TimelineSeparator>
              <Zoom {...transitionProps(delay1)}>
                <TimelineDot className={classes.timelineDot}>
                  <Avatar alt={exp.companyName} src={exp.companyLogo} />
                </TimelineDot>
              </Zoom>
              {index !== experiences.length - 1 && (
                <TimelineConnector className={classes.timelineConnector} />
              )}
            </TimelineSeparator>


            {/* Right side of the timeline */}
            <Fade {...transitionProps(delay2)}>
              <TimelineContent>
                <ExpandableCard info={exp} showDetails={exp.showDetails} />
              </TimelineContent>
            </Fade>

          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
