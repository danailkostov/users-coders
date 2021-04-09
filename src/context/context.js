import React, { useEffect, useState } from "react";
import mockUser from "../context/mockData.js/mockUser";
import mockRepos from "../context/mockData.js/mockRepos";
import mockFollowers from "../context/mockData.js/mockFollowers";
// Endpoints //
const mainUrl = "https://api.github.com/";
const rateAPIEnd = `${mainUrl}rate_limit`;
const userAPIEnd = `${mainUrl}users/`;

//context include
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // States
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState(mockFollowers);
  const [user, setUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [rateLimit, setRateLimit] = useState(0);
  const [searchValue, setSearchValue] = useState("john-smilga");
  const [error, setError] = useState({ show: "", msg: "" });
  // fetchFunctions
  const fetchUser = async (user) => {
    try {
      const response = await fetch(`${userAPIEnd}${user}`);
      if (response.status === 200) {
        const data = await response.json();
        setUser(data);
      } else {
        setError((state) => {
          return { ...state, show: true, msg: "No users" };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRateLimit = async () => {
    try {
      const response = await fetch(rateAPIEnd);
      const data = await response.json();
      const {
        rate: { remaining },
      } = data;
      setRateLimit(remaining);
      if (remaining === 0) {
        setError((state) => {
          return { ...state, show: true, msg: "No requests" };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFollowers = async (user) => {
    try {
      const followersAPIEnd = `${mainUrl}users/${user}/followers?per_page=100`;
      const response = await fetch(followersAPIEnd);
      if (response.status === 200) {
        const data = await response.json();
        setFollowers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRepos = async (user) => {
    try {
      const reposAPIEnd = `${mainUrl}users/${user}/repos?per_page=100`;
      const response = await fetch(reposAPIEnd);
      if (response.status === 200) {
        const data = await response.json();
        setRepos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // setup
  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      setError((state) => {
        return { ...state, show: "", msg: "" };
      });
      await fetchUser(searchValue);
      await fetchRateLimit();
      await fetchFollowers(searchValue);
      await fetchRepos(searchValue);
      setLoading(false);
    };
    fetchAPI();
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{
        followers,
        user,
        repos,
        rateLimit,
        setSearchValue,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
