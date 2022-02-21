import apiHelper from '../../utils/apiHelper';
import { BASE_URL, ORDER_STATUS } from '../../constants';

export const getProducts = async () => {
    try {
        const { data } = await apiHelper.get(BASE_URL);
        if (data) {
            return data.products || [];
        }
        return [];
    } catch (e) {
        return [];
    }
};

export const calculateTotalPrice = (products) => {
    return products.reduce((acc, cur) => acc += cur.price * cur.count, 0);
};

export const pay = async () => {
    try {
        const { data } = await apiHelper.post(BASE_URL, {});
        if (data) {
            return data;
        }
        throw new Error();
    } catch (e) {
        return { orderId: undefined, status: ORDER_STATUS.CREATE_ORDER_FAILED};
    }
};
