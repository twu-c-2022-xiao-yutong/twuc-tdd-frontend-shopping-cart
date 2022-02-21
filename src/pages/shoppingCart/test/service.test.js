import { calculateTotalPrice, getProducts, pay } from '../service';
import apiHelper from '../../../utils/apiHelper';
import { BASE_URL } from '../../../constants';

jest.mock('../../../utils/apiHelper');

describe('getProducts', () => {
    test('should get product list', async () => {
        const products = [{ id: 1, name: 'Apple', price: 5.00, count: 1 }];
        apiHelper.get.mockResolvedValueOnce({ data: { products } });

        const result = await getProducts();

        expect(result).toBe(products);
        expect(apiHelper.get).toBeCalledWith(BASE_URL);
    });

    it('should get empty array when got error in response', async () => {
        apiHelper.get.mockRejectedValueOnce(new Error('failed'));

        const result = await getProducts();

        expect(result).toEqual([]);
        expect(apiHelper.get).toBeCalledWith(BASE_URL);
    });

    it('should get empty array when response without data field', async () => {
        apiHelper.get.mockResolvedValueOnce({});

        const result = await getProducts();

        expect(result).toEqual([]);
        expect(apiHelper.get).toBeCalledWith(BASE_URL);
    });

    it('should get empty array when response without products field', async () => {
        apiHelper.get.mockResolvedValueOnce({ data: {} });

        const result = await getProducts();

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

describe('pay', () => {
    test('should get order ID and status', async () => {
        apiHelper.post.mockResolvedValueOnce({ data: { orderId: '1234', status: 'PAID' }});

        const { orderId, status } = await pay();

        expect(orderId).toBe('1234');
        expect(status).toBe('PAID');
        expect(apiHelper.post).toBeCalledWith(BASE_URL, {});
    });

    test('should handle error when got response without data field', async () => {
        apiHelper.post.mockResolvedValueOnce({});

        const { orderId, status } = await pay();

        expect(orderId).toBeUndefined();
        expect(status).toBe('CREATE_ORDER_FAILED');
        expect(apiHelper.post).toBeCalledWith(BASE_URL, {});
    });

    test('should handle error when pay failed', async () => {
        apiHelper.post.mockRejectedValueOnce(new Error());

        const { orderId, status } = await pay();

        expect(orderId).toBeUndefined();
        expect(status).toBe('CREATE_ORDER_FAILED');
        expect(apiHelper.post).toBeCalledWith(BASE_URL, {});
    });
});
