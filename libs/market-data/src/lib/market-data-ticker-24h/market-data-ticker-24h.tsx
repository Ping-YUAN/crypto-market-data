import {
  BinanceSymbol24PriceStatistics,
  MarketDataContext,
} from '@crypto-market-data/market-data-context';
import { get24hTickerBySymbolFromApi } from '@crypto-market-data/market-data-request';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledMarketDataTicker24h = styled.div`
  min-width: 250px;
`;

export function MarketDataTicker24h() {
  const { symbol, refreshCount } = useContext(MarketDataContext);
  const [ticker24, setTicker24] = useState(
    {} as BinanceSymbol24PriceStatistics
  );
  useEffect(() => {
    if (symbol && symbol.symbol) {
      get24hTickerBySymbolFromApi(symbol.symbol).then((data) => {
        setTicker24(data);
      });
    }
  }, [symbol, refreshCount]);
  return (
    <StyledMarketDataTicker24h>
      <Card>
        <CardHeader title="24h Ticker"></CardHeader>

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
              {ticker24 ? ticker24.priceChange : '...'} {symbol.quoteAsset}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </StyledMarketDataTicker24h>
  );
}
