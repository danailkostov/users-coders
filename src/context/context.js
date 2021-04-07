import React, { useEffect, useState } from "react";
import mockFollowers from "./mockData.js/mockFollowers";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import { fetchRateLimit } from "../services";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState(mockFollowers);
  const [user, setUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [rateLimit, setRateLimit] = useState(0);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      setRateLimit(await fetchRateLimit());
      setLoading(false);
    };
    fetchAPI();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <AppContext.Provider value={{ followers, user, repos, rateLimit }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
