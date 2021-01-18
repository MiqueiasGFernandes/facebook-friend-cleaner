import React from 'react';
import { render } from '@testing-library/react';
import Routes from '../Routes';

describe('<Routes/>', () => {
  test('Should render component correctly', () => {
    const sut = render(<Routes />);
    expect(sut).toBe(sut);
  });
});
