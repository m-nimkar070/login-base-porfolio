import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
    fetchData();
  };

  const handleLogout = () => {
    setLoggedIn(!loggedIn)
  };

  const contextValue = {
    loggedIn,
    data,
    handleLogin,
    handleLogout,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
