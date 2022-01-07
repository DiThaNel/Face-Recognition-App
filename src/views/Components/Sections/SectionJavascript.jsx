import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 1),
    backgroundColor: "transparent",
    boxShadow: "none",
    textAlign: "center",
    position: "absolute",
    left: "10%",
    right: "10%"
  },
  boundingbox: {
    position: "absolute",
    boxShadow: "0 0 0 3px rgb(255,3,154) inset",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    cursor: "pointer"
  }
}));

// eslint-disable-next-line react/prop-types
export default function SectionJavascript({ imageUrl, box }) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <div>
          <img
            id="inputimage"
            alt=""
            src={imageUrl}
            width="100%"
            height="auto"
          />
          <div
            className={classes.boundingbox}
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}
          ></div>
        </div>
      </Paper>
    </div>
  );
}
