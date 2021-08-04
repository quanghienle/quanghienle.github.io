import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "15px",
    width: "100%",
  },
  boldText: {
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    textTransform: "none",
  },
}));

export default function ExpandableCard(props) {
  const classes = useStyles();
  const { info, showDetails } = props;
  const [isExpanded, setIsExpanded] = React.useState(!!showDetails);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const detailsList = (
    <ul>
      {info.details.map((detail, detailIndex) => (
        <li key={`detail-${detailIndex}`}>
          <Typography align="left" variant="body1" color="textSecondary">
            {detail}
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <Button className={classes.button} onClick={handleExpand}>
      <Paper elevation={5} className={classes.paper}>
        <Typography align="left" variant="h5" className={classes.boldText}>
          {info.jobTitle}
          {isExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </Typography>
        <Typography align="left" variant="h6" color="textSecondary">
          {info.companyName}
        </Typography>
        {isExpanded && detailsList}
      </Paper>
    </Button>
  );
}
