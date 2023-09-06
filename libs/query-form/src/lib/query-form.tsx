/* eslint-disable react-hooks/exhaustive-deps */
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MarketDataContext } from '@crypto-market-data/market-data-context';
import { getSymbolsFromApi } from '@crypto-market-data/market-data-request';
import Button from '@mui/material/Button';

const StyledQueryForm = styled.div`
  width: 80%;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  align-items: stretch;
`;

export function QueryForm() {
  const [allSymbols, setAllSymbols] = useState([]);

  const { symbol, setSymbol, setRefreshCount } = useContext(MarketDataContext);

  useEffect(() => {
    if (symbol) {
      getSymbolsFromApi()
        .then((data) => {
          console.log(data);
          const symbols = data.symbols;
          setAllSymbols(symbols);
          setSymbol(symbols[0]);
        })
        .catch((error) => {
          console.log(`err`);
        });
    }
  }, []);
  return (
    <StyledQueryForm>
      <Autocomplete
        disablePortal
        defaultValue={symbol.symbol}
        options={allSymbols.map((item) => (item as any).symbol)}
        onInputChange={(event, newInputValue) => {
          const idx = allSymbols.findIndex(
            (item) => (item as any).symbol == newInputValue
          );
          if (idx > -1) {
            setSymbol(allSymbols[idx]);
          }
        }}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Currency" />}
      />

      <Button variant="contained" onClick={() => setRefreshCount()}>
        Refresh
      </Button>
    </StyledQueryForm>
  );
}

export default QueryForm;
