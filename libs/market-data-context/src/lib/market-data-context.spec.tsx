import { render } from '@testing-library/react';

import { MarketDataProvider } from './market-data-context';

describe('MarketDataProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarketDataProvider children={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});
