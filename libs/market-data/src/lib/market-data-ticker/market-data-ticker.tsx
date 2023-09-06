import {
  BinanceSymbolPrice,
  MarketDataContext,
} from '@crypto-market-data/market-data-context';
import { getTickerBySymbolFromApi } from '@crypto-market-data/market-data-request';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledMarketDataTicker = styled.div`
  min-width: 250px;
`;

export function MarketDataTicker() {
  const { symbol, refreshCount } = useContext(MarketDataContext);
  const [ticker, setTicker] = useState({} as BinanceSymbolPrice);
  useEffect(() => {
    if (symbol && symbol.symbol) {
      getTickerBySymbolFromApi(symbol.symbol).then((data) => {
        setTicker(data);
      });
    }
  }, [symbol, refreshCount]);
  return (
    <StyledMarketDataTicker>
      <Card>
        <CardHeader title="Ticker"></CardHeader>
        <CardContent>
          <Typography
            component="div"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>Symbol: </div>
            <div>{symbol.symbol}</div>
          </Typography>
          <Typography
            component="div"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>Price: </div>
            <div>
              {ticker ? ticker.price : '...'} {symbol.quoteAsset}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </StyledMarketDataTicker>
  );
}
