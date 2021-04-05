import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Follower from "../Follower";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "inline-block",
    padding: "10px",
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    paddingBottom: "0px",
  },
  label: {
    padding: "10px",
    color: "#617d98",
    fontWeight: "bold",
  },
  paperTwo: {
    borderTopLeftRadius: "0px",
    overflow: "scroll",
    height: "283px",
  },
}));

const Followers = ({ followers }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation="0">
        <Typography component="label" className={classes.label}>
          Followers
        </Typography>
      </Paper>
      <Paper className={classes.paperTwo}>
        {followers.map((follower) => (
          <Follower {...follower} />
        ))}
      </Paper>
    </>
  );
};

export default Followers;
