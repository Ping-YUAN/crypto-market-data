import { render } from '@testing-library/react';

import { MarketDataRecentTrade } from './market-data-recent-trade';

describe('MarketDataRecentTrade', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarketDataRecentTrade />);
    expect(baseElement).toBeTruthy();
  });
});
