import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../src/pages/ShoppingCart';
import axios from 'axios';

jest.mock('axios');

describe('Shopping Cart', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            data: {
                products: [
                    { id: 1, name: 'Apple', price: 5.00, count: 1 }
                ],
                total: 5.00
            }
        });
    });

    afterEach(() => {
        axios.get.mockReset();
    });

    test('should show shopping cart page', async () => {
        const { container } = render(<ShoppingCart />);

        expect(axios.get).toBeCalled();

        await waitFor(() => {
            expect(container).toHaveTextContent(
                'Shopping Cart商品名称单 价数 量Apple5.001合计：5.00'
            );
        });
    });
});
