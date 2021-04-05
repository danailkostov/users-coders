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
  const convertLanguagesToArray = Object.values(languages);

  return (
    <Container>
      <Grid container spacing={4} style={{ margin: "50px 0px" }}>
        <Grid item xs={6}>
          <Languages data={convertLanguagesToArray} />
        </Grid>
        <Grid item xs={6}>
          <Popular />
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
