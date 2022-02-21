import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ProductTable from '../index';

describe('ProductTable', () => {
    test('should show table header of product list', () => {
        const { container } = render(<ProductTable products={[]}/>);

        const thElements = container.getElementsByTagName('th');

        expect(thElements.length).toBe(3);
        ['商品名称', '单 价', '数 量'].forEach((text, index) => {
            expect(thElements.item(index)).toHaveTextContent(text);
        });
    });

    test('should show product list', () => {
        const products = [
            { id: 1, name: 'Apple', price: 5.00, count: 1 },
            { id: 2, name: 'Banana', price: 6.00, count: 2 },
            { id: 3, name: 'Peach', price: 4.00, count: 4 },
        ];

        const { container } = render(<ProductTable products={products} />);

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
