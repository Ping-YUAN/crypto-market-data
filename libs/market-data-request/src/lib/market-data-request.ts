export const getSymbolsFromApi = () => {
  return fetch('https://api.binance.com/api/v3/exchangeInfo').then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error('Invalid response');
  });
};
