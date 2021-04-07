import { Container, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import InfoItem from "../InfoItem";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CodeIcon from "@material-ui/icons/Code";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: '50px 0px'
  }
}))

const Info = () => {
  const classes = useStyles();
  const { user } = useContext(AppContext);
  const { followers, following, public_repos, public_gists } = user;
  const items = [
    {
      count: public_repos,
      title: "Repos",
      icon: <AssignmentIcon fontSize="large" />,
    },
    {
      count: followers,
      title: "Followers",
      icon: <PeopleAltIcon fontSize="large" />,
    },
    {
      count: following,
      title: "Following",
      icon: <PersonAddIcon fontSize="large" />,
    },
    {
      count: public_gists,
      title: "Gists",
      icon: <CodeIcon fontSize="large" />,
    },
  ];
  console.log(user);
  return (
    <Container>
      <Grid container spacing={4} className={classes.grid}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={3}>
            <InfoItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Info;
