import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  box: {
    minHeight: "100vh",
    backgroundColor: "#e0fcff",
    placeItems: "center",
    textAlign: "center",
  },
  headings: {
    color: "#102a42",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#2caeba",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <Grid container component="section" className={classes.box}>
      <Grid item xs={12}>
        <Typography variant="h1" component="h1" className={classes.headings}>
          404
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          className={classes.headings}
          gutterBottom
          paragraph
        >
          Sorry, The Page You Tried Cannot Be Found
        </Typography>
        <Button size="small" variant="contained" className={classes.btn}>
          <Link to="/" className={classes.link}>
            Back Home
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Error;

// background-color: #e0fcff
// text-color: #102a42
// button color: #2caeba
