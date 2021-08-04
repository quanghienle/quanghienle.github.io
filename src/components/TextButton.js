import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: (props) => props.backgroundColor || "inherit",
  },
  text: {
    color: (props) =>
      props.selected ? props.selectedColor : props.color || "inherit",
    fontWeight: (props) => (props.selected ? 900 : 500),
    "&::before, &::after": {
      position: "absolute",
      left: "0px",
      width: "100%",
      height: "1px",
      background: (props) => props.color || "inherit",
      content: "''",
      opacity: 0,
      transition: "all 0.3s",
    },
    "&::before": {
      top: "0px",
      transform: "translateY(10px)",
    },
    "&::after": {
      bottom: "0px",
      transform: "translateY(-10px)",
    },
    "&:hover": {
      "&::after": {
        opacity: 0.6,
        transform: "translateY(-5px)",
      },
      "&::before": {
        opacity: 0.6,
        transform: "translateY(5px)",
      },
    },
  },
}));

export default function TextButton({ children, ...props }) {
  const classes = useStyles(props);
  const { size = "large", onClick } = props;
  return (
    <Button size={size} onClick={onClick}>
      <span className={classes.text}>{children}</span>
    </Button>
  );
}
