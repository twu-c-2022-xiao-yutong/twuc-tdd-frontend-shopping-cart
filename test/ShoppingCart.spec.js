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
                    { id: 1, name: 'Apple', price: 5.00, count: 1 },
                    { id: 2, name: 'Banana', price: 6.00, count: 2 },
                    { id: 3, name: 'Peach', price: 4.00, count: 4 },
                ]
            }
        });
    });

    afterEach(() => {
        axios.get.mockReset();
    });

    test('should show shopping cart page', () => {
        const { getByText } = render(<ShoppingCart/>);

        expect(getByText('Shopping Cart')).toBeInTheDocument();
    });

    test('should show table header of product list', () => {
        const { container } = render(<ShoppingCart/>);

        const thElements = container.getElementsByTagName('th');

        expect(thElements.length).toBe(3);
        ['商品名称', '单 价', '数 量'].forEach((text, index) => {
            expect(thElements.item(index)).toHaveTextContent(text);
        });
    });

    test('should show product list', async () => {
        const { container } = render(<ShoppingCart/>);

        await waitFor(() => {
            const trElements = container
                .querySelector('tbody')
                .getElementsByTagName('tr');

            expect(trElements.length).toBe(3);

            [
                ['Apple', '5.00', '1'],
                ['Banana', '6.00', '2'],
                ['Peach', '4.00', '4']
            ].forEach((textGroup, index) => {
                const tdElements = trElements.item(index).getElementsByTagName('td');
                expect(tdElements.length).toBe(3);
                textGroup.forEach((text, index) => {
                    expect(tdElements.item(index)).toHaveTextContent(text);
                });
            });
        });
    });

    test('should show total price', async () => {
        const { container } = render(<ShoppingCart/>);

        await waitFor(() => {
            expect(container.querySelector('.total')).toHaveTextContent('合计：33.00');
        });
    });
});
