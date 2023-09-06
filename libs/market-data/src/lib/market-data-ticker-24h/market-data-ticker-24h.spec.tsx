import { render } from '@testing-library/react';

import { MarketDataTicker24h } from './market-data-ticker-24h';

describe('MarketDataTicker24h', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarketDataTicker24h />);
    expect(baseElement).toBeTruthy();
  });
});
