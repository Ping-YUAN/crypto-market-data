import { render } from '@testing-library/react';

import MarketDataContext from './market-data-context';

describe('MarketDataContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarketDataContext />);
    expect(baseElement).toBeTruthy();
  });
});
