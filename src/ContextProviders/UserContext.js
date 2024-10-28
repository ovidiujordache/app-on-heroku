import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const sessionId = `${username}-${Date.now()}`;
    setUser({ username, sessionId });
  };

  const logout = () => {
    setUser(null);
  };


  useEffect(() => {
    console.log('User state changed:', user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
