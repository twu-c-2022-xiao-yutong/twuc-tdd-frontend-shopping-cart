import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';
import { getProducts } from '../service';

jest.mock('../service');

describe('Shopping Cart', () => {
  beforeEach(() => {
    // given
    getProducts.mockResolvedValueOnce(
        [
          {"id": 1, "name": "小米手环", "price": 299.00, "count": 1},
          {"id": 2, "name": "任天堂 Nintendo Switch", "price": 2099.00, "count": 2},
          {"id": 3, "name": "SONY WH-1000XM4 无线智能降噪耳机", "price": 2099.00, "count": 1},
          {"id": 4, "name": "iPhone 13 256GB", "price": 6799.00, "count": 1}
        ]
    );
  });

  afterEach(() => {
    getProducts.mockReset();
  });

  test('should show shopping cart page', () => {
    const { getByText } = render(<ShoppingCart/>);

    expect(getByText('Shopping Cart')).toBeInTheDocument();
  });

  test('should show empty product list', () => {
    // given

    // when
    const { container } = render(<ShoppingCart/>);
    const thElements = container.getElementsByTagName('th');

    // then
    expect(thElements.length).toBe(3);
    ['商品名称', '单价', '数量'].forEach((text, index) => {
      expect(thElements.item(index)).toHaveTextContent(text);
    })
  })

  test('should show products in product list', async () => {

    // when
    const { container } = render(<ShoppingCart/>);

    // then
    await waitFor(() => {
      const trElements = container.querySelectorAll('tbody tr');
      expect(trElements.length).toBe(4);

      const tableContent = [
        ['小米手环', '299.00', '1'],
        ['任天堂 Nintendo Switch', '2099.00', '2'],
        ['SONY WH-1000XM4 无线智能降噪耳机', '2099.00', '1'],
        ['iPhone 13 256GB', '6799.00', '1'],
      ];
      for (let i = 0; i < trElements.length; i++) {
        const tdElements = trElements.item(i).getElementsByTagName('td');
        for (let j = 0; j < tdElements.length; j++) {
          expect(tdElements.item(j)).toHaveTextContent(tableContent[i][j]);
        }
      }
    })

  })
});
