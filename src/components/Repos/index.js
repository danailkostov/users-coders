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
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: 0 };
    }
    total[language].value++;
    total[language].stars += stargazers_count;
    return total;
  }, {});
  const usedLanguages = Object.values(languages);

  const sortedRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .reduce((total, item) => {
      const { name, stargazers_count, forks } = item;
      if (!name) return total;
      if (!total[name]) {
        total[name] = { label: name, value: stargazers_count, forks: forks };
      }
      return total;
    }, {});

  const popularRepos = Object.values(sortedRepos).slice(0, 5);

  const stars = usedLanguages
    .map((item) => {
      const { label, stars } = item;
      return { label: label, value: stars };
    })
    .sort((a, b) => b.value - a.value);

  const forks = Object.values(sortedRepos)
    .map((item) => {
      const { label, forks } = item;
      return { label: label, value: forks };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <Container>
      <Grid container spacing={4} style={{ margin: "50px 0px" }}>
        <Grid item xs={5}>
          <Languages data={usedLanguages} />
        </Grid>
        <Grid item xs={7}>
          <Popular data={popularRepos} />
        </Grid>
        <Grid item xs={5}>
          <Stars data={stars} />
        </Grid>
        <Grid item xs={7}>
          <Forked data={forks} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Repos;
