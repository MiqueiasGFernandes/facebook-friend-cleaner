import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App/>', () => {
  test('Should render component correctly', () => {
    const sut = render(<App />);
    expect(sut).toEqual(sut);
  });
});
