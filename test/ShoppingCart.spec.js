import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../src/pages/ShoppingCart';

test('Main', () => {
    const { getByText } = render(<ShoppingCart />);
    expect(getByText('Shopping Cart')).toBeInTheDocument();
});
