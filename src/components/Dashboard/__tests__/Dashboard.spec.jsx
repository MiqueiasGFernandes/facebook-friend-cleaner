import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('<Dashboard/>', () => {
  test('Should render component correctly', () => {
    const sut = render(<Dashboard />);
    expect(sut).toBe(sut);
  });
});
