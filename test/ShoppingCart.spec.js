import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../src/pages/ShoppingCart';
import axios from 'axios';

jest.mock('axios');

describe('Shopping Cart', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            data: [
                { id: 1, name: 'Apple', price: '5', count: 1 }
            ]
        });
    });

    afterEach(() => {
        axios.get.mockReset();
    });

    test.skip('should show shopping cart page', () => {
        const { getByText } = render(<ShoppingCart />);
        expect(getByText('Shopping Cart')).toBeInTheDocument();
    });

    test.skip('should show product list', async () => {
        render(<ShoppingCart />);
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(screen.getByText('Apple')).toBeInTheDocument();
        });
    });
});
