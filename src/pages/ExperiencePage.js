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
import {
  Paper,
  Typography,
  Avatar,
  Button,
  Zoom,
  Fade,
  Grow,
  Slide,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "20px",
    margin: 0,
  },
  paper: {
    padding: "6px 16px",
    width: "100%",
  },
  boldText: {
    fontWeight: "bold",
  },
  oppositeContent: {
    flex: "none",
    width: "150px",
  },
  timelineConnector: {
    backgroundColor: theme.palette.primary.dark,
  },
  timelineDot: {
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
}));

function DetailExpand(props) {
  const classes = useStyles();
  const { info, parentIndex, showDetails } = props;
  const [isExpanded, setIsExpanded] = React.useState(!!showDetails);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const detailsList = (
    <ul>
      {info.details.map((description, descriptionIndex) => (
        <li key={`detail-${parentIndex}-${descriptionIndex}`}>
          <Typography align="left" variant="body1" color="textSecondary">
            {description}
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <Button
      color="primary"
      style={{ width: "100%", textTransform: "none" }}
      onClick={handleExpand}
    >
      <Paper elevation={5} className={classes.paper}>
        <Typography align="left" variant="h5" className={classes.boldText}>
          {info.jobTitle}
          {isExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </Typography>
        <Typography align="left" variant="h6" color="textSecondary">
          {info.companyName}
        </Typography>
        {isExpanded ? detailsList : ""}
      </Paper>
    </Button>
  );
}

export default function ExperiencePage(props) {
  const { experiences } = props;
  const classes = useStyles();
  const [didMount, setDidMount] = React.useState(false);

  React.useEffect(() => {
    if (!didMount) {
      setDidMount(true);
    }
  });

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
        const connector =
          index !== experiences.length - 1 ? (
            <TimelineConnector className={classes.timelineConnector} />
          ) : null;

        return (
          <TimelineItem key={`timeline-item-${index}`}>
            <TimelineOppositeContent className={classes.oppositeContent}>
              <Fade {...transitionProps(delay2)}>
                <Typography variant="body2" color="textSecondary">
                  {`${exp.fromDate} - ${exp.toDate}`}
                  <br />
                  {exp.location}
                </Typography>
              </Fade>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <Zoom {...transitionProps(delay1)}>
                <TimelineDot className={classes.timelineDot}>
                  <Avatar alt={exp.companyName} src={exp.companyLogo} />
                </TimelineDot>
              </Zoom>

                {connector}

            </TimelineSeparator>

            <Fade {...transitionProps(delay2)}>
              <TimelineContent>
                <DetailExpand
                  info={exp}
                  parentIndex={index}
                  showDetails={index === 0}
                />
              </TimelineContent>
            </Fade>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
