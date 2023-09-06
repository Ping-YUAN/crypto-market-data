import { render } from '@testing-library/react';

import { MarketDataTicker } from './market-data-ticker';

describe('MarketDataTicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarketDataTicker />);
    expect(baseElement).toBeTruthy();
  });
});
