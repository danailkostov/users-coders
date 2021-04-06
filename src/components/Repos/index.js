import React, { useContext } from "react";
import Languages from "../Languages";
import Popular from "../Popular";
import Stars from "../Stars";
import Forked from "../Forked";
import { Container, Grid } from "@material-ui/core";
import { AppContext } from "../../context/context";
const Repos = () => {
  const { repos } = useContext(AppContext);
  const languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    }
    total[language].value++;
    return total;
  }, {});
  const usedLanguages = Object.values(languages);

  const sortedRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5)
    .reduce((total, item) => {
      const { name, stargazers_count } = item;
      if (!name) return total;
      if (!total[name]) {
        total[name] = { label: name, value: stargazers_count };
      }
      return total;
    }, {});

  const popularRepos = Object.values(sortedRepos);

  return (
    <Container>
      <Grid container spacing={4} style={{ margin: "50px 0px" }}>
        <Grid item xs={6}>
          <Languages data={usedLanguages} />
        </Grid>
        <Grid item xs={6}>
          <Popular data={popularRepos} />
        </Grid>
        <Grid item xs={6}>
          <Stars />
        </Grid>
        <Grid item xs={6}>
          <Forked />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Repos;
