import styled from 'styled-components';
import { QueryForm } from '@crypto-market-data/query-form';
import { MarketDataProvider } from '@crypto-market-data/market-data-context';
import { MarketData } from '@crypto-market-data/market-data';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';

const StyledApp = styled.div`
  .market-data-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    padding-top: 64px;
    height: 100%;
    overflow: scroll;
  }
`;

export function App() {
  return (
    <MarketDataProvider>
      <StyledApp>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Crypto market data
            </Typography>
            <Button
              color="inherit"
              href="https://github.com/Ping-YUAN/crypto-market-data"
            >
              Doc
            </Button>
          </Toolbar>
        </AppBar>
        <div className="market-data-container">
          <QueryForm></QueryForm>
          <MarketData></MarketData>
        </div>
      </StyledApp>
    </MarketDataProvider>
  );
}

export default App;
