import styled from 'styled-components';
import { QueryForm } from '@crypto-market-data/query-form';
import { MarketDataProvider } from '@crypto-market-data/market-data-context';
import { MarketData } from '@crypto-market-data/market-data';
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <MarketDataProvider>
      <StyledApp>
        <QueryForm></QueryForm>
        <MarketData></MarketData>
      </StyledApp>
    </MarketDataProvider>
  );
}

export default App;
