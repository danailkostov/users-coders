import React, { useState } from "react";
import mockFollowers from "./mockData.js/mockFollowers";
import mockUser from "./mockData.js/mockUser";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [followers, setFollowers] = useState(mockFollowers);
  const [user, setUser] = useState(mockUser);
  return (
    <AppContext.Provider value={{ followers, user }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
