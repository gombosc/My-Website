'use client'

import React, { createContext, useState } from 'react';

const LogoContext = createContext();

const LogoProvider = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState('');

  const updateLogoUrl = (newUrl) => setLogoUrl(newUrl);

  return (
    <LogoContext.Provider value={{ logoUrl, updateLogoUrl }}>
      {children}
    </LogoContext.Provider>
  );
};

export { LogoContext, LogoProvider };
