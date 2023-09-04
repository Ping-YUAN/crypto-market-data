import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MarketDataContext } from '@crypto-market-data/market-data-context';
import { getSymbolsFromApi } from '@crypto-market-data/market-data-request';
/* eslint-disable-next-line */
export interface QueryFormProps {}

const StyledQueryForm = styled.div`
  color: pink;
`;

export function QueryForm() {
  const [currencies, setCurrencies] = useState([]);

  const { setCurrency } = useContext(MarketDataContext);
  useEffect(() => {
    getSymbolsFromApi()
      .then((data) => {
        console.log(data);
        const symbols = data.symbols.map((item) => item.symbol);
        setCurrencies(symbols);
      })
      .catch((error) => {
        console.log(`err`);
      });
  }, []);
  return (
    <StyledQueryForm>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={currencies}
        onInputChange={(event, newInputValue) => {
          setCurrency(newInputValue);
        }}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="currency" />}
      />
    </StyledQueryForm>
  );
}

export default QueryForm;
