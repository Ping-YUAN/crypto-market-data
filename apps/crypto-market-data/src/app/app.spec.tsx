import { render } from '@testing-library/react';
import App from './app';

jest.mock('@crypto-market-data/market-data-request', () => {
  return {
    getSymbolsFromApi: jest.fn(() => Promise.resolve({ symbols: [] })),
  };
});

const mockQueryFormComponent = jest.fn();
jest.mock('@crypto-market-data/query-form', () => {
  return {
    QueryForm: (props) => {
      mockQueryFormComponent(props);
      return <div></div>;
    },
  };
});
const mockMarketDataComponent = jest.fn();
jest.mock('@crypto-market-data/market-data', () => {
  return {
    MarketData: (props) => {
      mockMarketDataComponent(props);
      return <div></div>;
    },
  };
});

describe('App', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
