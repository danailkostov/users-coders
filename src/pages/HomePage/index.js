import React, { useContext } from "react";
import Info from "../../components/Info";
import User from "../../components/User";
import Repos from "../../components/Repos";
import Search from "../../components/Search";
import Navbar from "../../components/Navbar";
import { AppContext } from "../../context/context";
import { CircularProgress, Typography } from "@material-ui/core";

const Home = () => {
  const { loading } = useContext(AppContext);

  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <Typography align="center" style={{ marginTop: "50px" }}>
          <CircularProgress size={200} />
        </Typography>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Home;
