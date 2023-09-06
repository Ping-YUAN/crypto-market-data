import {
  BinanceSymbolRecentTrade,
  MarketDataContext,
} from '@crypto-market-data/market-data-context';
import { getRecentTradesBySymbolFromApi } from '@crypto-market-data/market-data-request';
import { Card, CardContent, CardHeader } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

const StyledRecentTrade = styled.div`
  margin-top: 24px;
`;

export function MarketDataRecentTrade() {
  const { symbol, refreshCount } = useContext(MarketDataContext);
  const [trades, setTrades] = useState([] as BinanceSymbolRecentTrade[]);
  const columns = [
    {
      name: 'Symbol',
      selector: (row) => row.symbol,
    },

    {
      name: 'Price',
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: 'Quantity',
      selector: (row) => row.qty,
      sortable: true,
    },

    {
      name: 'Quote Quantity',
      selector: (row) => row.quoteQty,
      sortable: true,
    },
    {
      name: 'Quote Asset',
      selector: (row) => row.quoteAsset,
    },
    {
      name: 'Time',
      selector: (row) => row.time,
      sortable: true,
      minWidth: '181px',
    },
  ];
  const customStyles = {
    rows: {
      style: {
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        fontWeight: '200',
        fontSize: '1rem',
      },
    },
    headCells: {
      style: {
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        fontWeight: '400',
        fontSize: '1rem',
      },
    },
  };
  useEffect(() => {
    if (symbol && symbol.symbol) {
      getRecentTradesBySymbolFromApi(symbol.symbol).then((data) => {
        setTrades(data);
      });
    }
  }, [symbol, refreshCount]);
  return (
    <StyledRecentTrade>
      <Card>
        <CardHeader title="Recent Trades"></CardHeader>
        <CardContent>
          <DataTable
            pagination
            columns={columns}
            data={trades.map((item) => {
              return {
                ...item,
                time: `${new Date(item.time)
                  .toISOString()
                  .replace('T', ' ')
                  .replace('Z', '')}`,
                symbol: symbol.symbol,
                quoteAsset: symbol.quoteAsset,
              };
            })}
            customStyles={customStyles}
          />
        </CardContent>
      </Card>
    </StyledRecentTrade>
  );
}
