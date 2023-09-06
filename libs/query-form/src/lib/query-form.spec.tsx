/* eslint-disable @typescript-eslint/no-empty-function */
import { render, waitFor } from '@testing-library/react';
import QueryForm from './query-form';
import { MarketDataContext } from '@crypto-market-data/market-data-context';

jest.mock('@crypto-market-data/market-data-request', () => {
  return {
    getSymbolsFromApi: jest.fn(() => Promise.resolve({ symbols: [] })),
  };
});

const mockContext = {
  symbol: {} as any,
  setSymbol: () => {},
  refreshCount: 0,
  setRefreshCount: () => {},
};

describe('QueryForm', () => {
  it('should render successfully', async () => {
    await waitFor(() => {
      const { baseElement } = render(
        <MarketDataContext.Provider value={mockContext}>
          <QueryForm />
        </MarketDataContext.Provider>
      );

      expect(baseElement).toBeTruthy();
    });
  });
});
