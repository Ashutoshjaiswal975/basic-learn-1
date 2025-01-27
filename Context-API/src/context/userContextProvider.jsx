import React, { useState, createContext } from "react";

const UserContext = createContext(); // Correctly defining context

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Fixed hook usage

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider }; // Correctly exporting

