import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Login';

describe('<Login/>', () => {
  test('Should render component correctly', () => {
    const sut = render(<Login />);
    expect(sut).toBe(sut);
  });
});
