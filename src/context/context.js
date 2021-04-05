import React, { useState } from "react";
import mockFollowers from "./mockData.js/mockFollowers";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [followers, setFollowers] = useState(mockFollowers);
  const [user, setUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  return (
    <AppContext.Provider value={{ followers, user, repos }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
