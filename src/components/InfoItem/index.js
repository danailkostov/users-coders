import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  count: {
    color: "#102A42",
    fontWeight: "bold",
  },
  title: {
    color: "#617D98",
  },
  paper: {
    display: "flex",
    placeItems: 'center',
    justifyContent: 'space-around',
    padding: '10px'
  },
}));

const InfoItem = ({ count, title, icon }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div>{icon}</div>
      <div>
        <Typography variant="h5" component="h3" className={classes.count}>
          {count}
        </Typography>
        <Typography variant="body1" component="p" className={classes.title}>
          {title}
        </Typography>
      </div>
    </Paper>
  );
};

export default InfoItem;
