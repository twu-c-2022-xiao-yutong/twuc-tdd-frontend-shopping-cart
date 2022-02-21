import { calculateTotalPrice, getProducts } from '../service';
import apiHelper from '../../../utils/apiHelper';
import { BASE_URL } from '../../../constants';

jest.mock('../../../utils/apiHelper');

describe('getProducts', () => {
    test('should get product list', async () => {
        const products = [{ id: 1, name: 'Apple', price: 5.00, count: 1 }];
        apiHelper.get.mockResolvedValueOnce({ data: { products } });

        const result = await getProducts(BASE_URL);

        expect(result).toBe(products);
        expect(apiHelper.get).toBeCalledWith(BASE_URL);
    });

    it('should get empty array when got error in response', async () => {
        apiHelper.get.mockRejectedValueOnce(new Error('failed'));

        const result = await getProducts(BASE_URL);

        expect(result).toEqual([]);
        expect(apiHelper.get).toBeCalledWith(BASE_URL);
    });

    it('should get empty array when response without data field', async () => {
        apiHelper.get.mockResolvedValueOnce({});

        const result = await getProducts(BASE_URL);

        expect(result).toEqual([]);
        expect(apiHelper.get).toBeCalledWith(BASE_URL);
    });

    it('should get empty array when response without products field', async () => {
        apiHelper.get.mockResolvedValueOnce({ data: {} });

        const result = await getProducts(BASE_URL);

        expect(result).toEqual([]);
        expect(apiHelper.get).toBeCalledWith(BASE_URL);
    });
});

describe('calculateTotalPrice', () => {
    test('should calculate total price by product list', () => {
        const products = [
            { id: 1, name: 'Apple', price: 5.00, count: 1 },
            { id: 2, name: 'Banana', price: 6.00, count: 2 },
            { id: 3, name: 'Peach', price: 4.00, count: 4 },
        ];

        const total = calculateTotalPrice(products);

        expect(total).toBe(33);
    });
});

