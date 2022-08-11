import {getData} from '../../service/service';
import {getProducts} from './store';

jest.mock('../../service/service');

describe('Store', ()=>{
  test('Should get product list whne call getProducts', async()=>{
    const products =[
      {'id': 1, 'name': '小米手环', 'price': 299, 'count': 1},
      {'id': 2, 'name': '任天堂 Nintendo Switch', 'price': 2099, 'count': 2},
      {'id': 3, 'name': 'SONY WH-1000XM4 无线智能降噪耳机', 'price': 2099, 'count': 1},
      {'id': 4, 'name': 'iPhone 13 256GB', 'price': 6799, 'count': 1},
    ];
    getData.mockResolvedValue({products});

    const actual = await getProducts();
    expect(actual).toEqual(products);
  });

  test('should return empty product list when call getProducts, given request failed', async () => {
    getData.mockRejectedValue(new Error('Error'));

    const actual = await getProducts();
    expect(actual).toEqual([]);
  });
});