import { Avatar, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "10px",
    paddingLeft: "30px",
  },
  link: {
    color: "#2CAEBA",
    "&:hover": {
      color: "#551A8B",
    },
  },
}));

const Follower = ({ avatar_url, login, html_url }) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" className={classes.container}>
      <Grid item xs={1}>
        <Avatar src={avatar_url} />
      </Grid>
      <Grid item xs={12} sm={11}>
        <Typography variant="h6">{login}</Typography>
        <Link href={html_url} underline="none" className={classes.link}>
          {html_url}
        </Link>
      </Grid>
    </Grid>
  );
};

export default Follower;
