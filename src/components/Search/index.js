import {
  Container,
  InputBase,
  InputAdornment,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../../context/context";
import Error from "../Error";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    fontSize: "1.3rem",
  },
  searchInput: {
    backgroundColor: "white",
    fontSize: "1.3rem",
    paddingLeft: "10px",
    marginLeft: "16px",
    borderRadius: "5px",
    height: "50px",
    width: "100%",
  },
  btn: {
    textTransform: "none",
    marginRight: "10px",
    marginBottom: "5px",
    marginTop: "5px",
    backgroundColor: "#2caeba",
    color: "white",
    padding: "0px 10px",
    fontSize: "1rem",
  },
  requests: {
    color: "#2caeba",
    fontWeight: "bold",
  },
}));

const Search = () => {
  const { rateLimit } = useContext(AppContext);
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <Container>
      {rateLimit > 0 && <Error />}
      <Grid container alignItems="center" spacing="2">
        <Grid item xs={12} sm={7}>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
                  <Button
                    variant="contained"
                    className={classes.btn}
                    onClick={handleSubmit}
                  >
                    Search
                  </Button>
                </InputAdornment>
              }
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h5" align="right" className={classes.requests}>
            Requests : {rateLimit} / 60
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
