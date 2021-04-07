import {
  Container,
  InputBase,
  InputAdornment,
  Button,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    fontSize: "3vw",
  },
  searchInput: {
    backgroundColor: "white",
    fontSize: "3vw",
    paddingLeft: "10px",
    marginLeft: "16px",
    borderRadius: "5px",
  },
  btn: {
    textTransform: "none",
    marginRight: "10px",
    backgroundColor: "#2caeba",
    color: "white",
    padding: "0px 10px",
    fontSize: "2vw",
  },
}));

const Search = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <InputBase
          placeholder="Enter Github User"
          className={classes.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className={classes.searchIcon} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <Button variant="contained" className={classes.btn}>
                Search
              </Button>
            </InputAdornment>
          }
        />
      </form>
      <Typography variant="h4">Requests : 52 / 60</Typography>
    </Container>
  );
};

export default Search;
