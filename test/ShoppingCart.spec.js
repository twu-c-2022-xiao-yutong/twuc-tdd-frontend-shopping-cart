import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../src/pages/ShoppingCart';

describe('Shopping Cart', () => {
    test('should show shopping cart page', () => {
        const { getByText } = render(<ShoppingCart />);
        expect(getByText('Shopping Cart')).toBeInTheDocument();
        expect(getByText('商品名称')).toBeInTheDocument();
        expect(getByText('单 价')).toBeInTheDocument();
        expect(getByText('数 量')).toBeInTheDocument();
    });
});
