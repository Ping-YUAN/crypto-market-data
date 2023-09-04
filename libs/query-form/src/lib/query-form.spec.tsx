import { render } from '@testing-library/react';

import QueryForm from './query-form';

describe('QueryForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QueryForm />);
    expect(baseElement).toBeTruthy();
  });
});
