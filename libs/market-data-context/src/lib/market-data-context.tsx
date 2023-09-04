import React, { createContext, useState } from 'react';

// Create the context
export const MarketDataContext = createContext({
  currency: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrency: (newCurrency) => {},
});

export const MarketDataProvider = ({ children }) => {
  const [currency, setCurrency] = useState('');

  const value = {
    currency: currency,
    setCurrency: (newCurrency) => setCurrency(newCurrency),
  };

  return (
    <MarketDataContext.Provider value={value}>
      {children}
    </MarketDataContext.Provider>
  );
};
