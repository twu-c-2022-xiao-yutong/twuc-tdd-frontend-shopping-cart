import apiHelper from '../apiHelper';
import { getProducts } from '../service';

jest.mock('../apiHelper');

describe('service: get products', () => {
  test('should return products array', async () => {
    // given
    const products = [
      {"id": 1, "name": "小米手环", "price": 299.00, "count": 1},
      {"id": 2, "name": "任天堂 Nintendo Switch", "price": 2099.00, "count": 2},
      {"id": 3, "name": "SONY WH-1000XM4 无线智能降噪耳机", "price": 2099.00, "count": 1},
      {"id": 4, "name": "iPhone 13 256GB", "price": 6799.00, "count": 1}
    ];

    apiHelper.get.mockResolvedValueOnce({
      data: {
        "products": [
          {"id": 1, "name": "小米手环", "price": 299.00, "count": 1},
          {"id": 2, "name": "任天堂 Nintendo Switch", "price": 2099.00, "count": 2},
          {"id": 3, "name": "SONY WH-1000XM4 无线智能降噪耳机", "price": 2099.00, "count": 1},
          {"id": 4, "name": "iPhone 13 256GB", "price": 6799.00, "count": 1}
        ]
      }
    })

    // when
    const result = await getProducts();

    // then
    expect(result).toEqual(products);
  })

  test('should return empty array when there is no data in response', async () => {
    // given
    apiHelper.get.mockResolvedValueOnce({});

    // when
    const result = await getProducts();

    // then
    expect(result).toEqual([]);
  });

  test('should return empty array when there is no products fields in response', async () => {
    // given
    apiHelper.get.mockResolvedValueOnce({ data: {} });

    // when
    const result = await getProducts();

    // then
    expect(result).toEqual([]);
  });

  test('should return empty array when get products request failed', async () => {
    // given
    apiHelper.get.mockRejectedValueOnce(new Error());

    // when
    const result = await getProducts();

    // then
    expect(result).toEqual([]);
  });
})
