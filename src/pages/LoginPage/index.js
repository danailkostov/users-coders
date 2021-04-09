import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginImg from "../../images/login-img.svg";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: "#f1f5f8",
    placeItems: "center",
    textAlign: "center",
  },
  img: {
    width: "100%",
    paddingBottom: "20px",
  },
  heading: {
    color: "#102a42",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#2caeba",
    color: "white",
  },
}));

const Login = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  return (
    <Grid container className={classes.container} component="section">
      <Container maxWidth="sm">
        <img src={LoginImg} alt="login" className={classes.img} />
        <Typography
          variant="h3"
          component="h1"
          className={classes.heading}
          gutterBottom
        >
          Github User
        </Typography>
        <Button
          variant="contained"
          size="small"
          className={classes.btn}
          onClick={() => loginWithRedirect()}
        >
          log in / sign up
        </Button>
      </Container>
    </Grid>
  );
};

export default Login;
