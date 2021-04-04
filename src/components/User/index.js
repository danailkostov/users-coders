import React, { useContext } from "react";
import UserDetails from "../UserDetails";
import UserFollowers from "../UserFollowers";
import { AppContext } from "../../context/context";
import { Container, Grid } from "@material-ui/core";

const User = () => {
  const { user, followers } = useContext(AppContext);
  return (
    <Container>
      <Grid container style={{ margin: "50px 0px" }} spacing={4}>
        <Grid item xs={12} lg={6}>
          <UserDetails {...user} />
        </Grid>
        <Grid item xs={6}>
          <UserFollowers />
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;
