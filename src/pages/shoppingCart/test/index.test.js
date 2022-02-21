import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';
import { getProducts, calculateTotalPrice, pay } from '../service';

jest.mock('../service');

describe('Shopping Cart', () => {
    beforeEach(() => {
        getProducts.mockResolvedValue(
            [
                { id: 1, name: 'Apple', price: 5.00, count: 1 },
                { id: 2, name: 'Banana', price: 6.00, count: 2 },
                { id: 3, name: 'Peach', price: 4.00, count: 4 },
            ]
        );
        calculateTotalPrice.mockReturnValue(33.00);
        pay.mockResolvedValue({ orderId: '1234', status: 'PAID' });
    });

    afterEach(() => {
        getProducts.mockReset();
        calculateTotalPrice.mockReset();
        pay.mockReset();
    });

    test('should show shopping cart page', () => {
        const { getByText } = render(<ShoppingCart/>);

        expect(getByText('Shopping Cart')).toBeInTheDocument();
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

    test('should show pay button', () => {
        const { getByRole } = render(<ShoppingCart/>);
        const buttonElement = getByRole('button');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('支 付');
    });

    test('should show pay status when click pay button', async () => {
        const { getByRole, getByText } = render(<ShoppingCart/>);

        fireEvent.click(getByRole('button'));

        await waitFor(() => {
            expect(getByText('支付成功')).toBeInTheDocument();
        });
    });
});
