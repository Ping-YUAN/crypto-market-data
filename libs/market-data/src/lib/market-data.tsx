import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MarketDataContext } from '@crypto-market-data/market-data-context';
/* eslint-disable-next-line */
export interface MarketDataProps {}

const StyledMarketData = styled.div`
  color: pink;
`;

export function MarketData(props: MarketDataProps) {
  const { currency } = useContext(MarketDataContext);
  useEffect(() => {
    if (currency) {
      console.log('currency changed ');
      // fetch(``, {method:'post'})
    }
  }, [currency]);
  return (
    <StyledMarketData>
      <h1>Welcome to MarketData {currency}! </h1>
    </StyledMarketData>
  );
}
