import React from "react";
import Info from "../../components/Info";
import User from "../../components/User";
import Repos from "../../components/Repos";
import Search from "../../components/Search";
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Search />
      <Info />
      <User />
      <Repos />
    </>
  );
};

export default Home;
