import { createContext, useState } from 'react';

export class BinanceSymbol {
  symbol!: string;
  quoteAsset!: string;
}

export class BinanceSymbolPrice {
  symbol!: string;
  price!: string;
}

export class BinanceSymbol24PriceStatistics {
  priceChange!: string;
}

export class BinanceSymbolRecentTrade {
  id!: number;
  price!: string;
  qty!: string;
  quoteQty!: string;
  time!: number;
  isBuyerMaker!: boolean;
  isBestMatch!: boolean;
}
// Create the context
export const MarketDataContext = createContext({
  symbol: {} as BinanceSymbol,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSymbol: (newSymbol) => {},
  refreshCount: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setRefreshCount: () => {},
});

export const MarketDataProvider = ({ children }) => {
  const [symbol, setSymbol] = useState({} as BinanceSymbol);
  const [refreshCount, setRefreshCount] = useState(0);

  const value = {
    symbol: symbol,
    setSymbol: (newSymbol) => setSymbol(newSymbol),
    refreshCount: refreshCount,
    setRefreshCount: () => setRefreshCount(refreshCount + 1),
  };

  return (
    <MarketDataContext.Provider value={value}>
      {children}
    </MarketDataContext.Provider>
  );
};
