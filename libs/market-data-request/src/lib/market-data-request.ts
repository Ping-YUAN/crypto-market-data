export const getSymbolsFromApi = () => {
  return fetch('https://api.binance.com/api/v3/exchangeInfo').then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error('Invalid response');
  });
};

export const getTickerBySymbolFromApi = (symbol: string) => {
  return fetch(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
  ).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error('Invalid response');
  });
};

export const get24hTickerBySymbolFromApi = (symbol: string) => {
  return fetch(
    `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
  ).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error('Invalid response');
  });
};

export const getRecentTradesBySymbolFromApi = (symbol: string) => {
  return fetch(`https://api.binance.com/api/v3/trades?symbol=${symbol}`).then(
    (res) => {
      if (res.status === 200) return res.json();
      else throw new Error('Invalid response');
    }
  );
};
