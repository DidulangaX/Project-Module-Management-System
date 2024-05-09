import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ name: '', registrationNumber: '' });

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};