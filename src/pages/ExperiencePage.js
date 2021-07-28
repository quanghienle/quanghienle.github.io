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
import { Paper, Typography, Avatar, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: theme.palette.grey.main,
  },
  timelineDot: {
    padding: 0,
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
        <Typography
          align="left"
          variant="h5"
          className={classes.boldText}
        >
          {info.jobTitle}
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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

  return (
    <Timeline>
      {experiences.map((exp, index) => {
        return (
          <TimelineItem key={`timeline-item-${index}`}>
            <TimelineOppositeContent className={classes.oppositeContent}>
              <Typography variant="body2" color="textSecondary">
                {`${exp.fromDate} - ${exp.toDate}`}
                <br />
                {exp.location}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="grey" className={classes.timelineDot}>
                <Avatar alt={exp.companyName} src={exp.companyLogo} />
              </TimelineDot>
              {index !== experiences.length - 1 ? (
                <TimelineConnector className={classes.timelineConnector} />
              ) : (
                ""
              )}
            </TimelineSeparator>

            <TimelineContent>
              <DetailExpand
                info={exp}
                parentIndex={index}
                showDetails={index === 0}
              />
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
