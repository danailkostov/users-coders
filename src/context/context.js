import React, { useEffect, useState } from "react";
import mockFollowers from "./mockData.js/mockFollowers";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import {
  fetchRateLimit,
  fetchUser,
  fetchFollowers,
  fetchRepos,
} from "../services";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState({});
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState({});
  const [rateLimit, setRateLimit] = useState(0);
  const [searchValue, setSearchValue] = useState("john-smilga");

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      setRateLimit(await fetchRateLimit());
      setUser(await fetchUser(searchValue));
      setFollowers(await fetchFollowers(searchValue));
      setRepos(await fetchRepos(searchValue));
      setLoading(false);
    };
    fetchAPI();
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{ followers, user, repos, rateLimit, setSearchValue, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
