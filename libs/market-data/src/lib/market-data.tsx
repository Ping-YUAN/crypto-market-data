import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MarketDataContext } from '@crypto-market-data/market-data-context';
import { MarketDataTicker } from './market-data-ticker/market-data-ticker';
import { MarketDataTicker24h } from './market-data-ticker-24h/market-data-ticker-24h';
import { MarketDataRecentTrade } from './market-data-recent-trade/market-data-recent-trade';

const StyledMarketData = styled.div`
  width: 80%;
  margin-top: 24px;
  .market-data-card {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: nowrap;
  }
`;

export function MarketData() {
  return (
    <StyledMarketData>
      <div className="market-data-card">
        <MarketDataTicker />
        <MarketDataTicker24h></MarketDataTicker24h>
      </div>
      <MarketDataRecentTrade></MarketDataRecentTrade>
    </StyledMarketData>
  );
}
