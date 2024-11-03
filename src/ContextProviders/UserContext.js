import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
const baseURL = 'http://localhost:5000';

const login = async (email, password) => {
    try {
        const response = await fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customeremail: email, password }),
        });

        if (!response.ok) throw new Error('Login failed');

        const data = await response.json();
        const sessionId = `${data.customeremail}-${Date.now()}`;
        setUser({ email: data.customeremail, sessionId }); // Ensure email is correctly passed
        console.log('User logged in:', data.customeremail); // Log the user email
    } catch (error) {
        console.error(error);
        alert('Login failed: ' + error.message);
    }
};

  const logout = () => {
    setUser(null);
  };
  
const register = async (username, email, password) => {
    try {
        const response = await fetch(`${baseURL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customername: username, customeremail: email, password }),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data = await response.json();
        console.log(email);
        await login(email, password);  // Ensure to await login if it's an async function
    } catch (error) {
        console.error(error);
        alert('Registration failed: ' + error.message);
    }
};

  useEffect(() => {
    console.log('User state changed:', user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
