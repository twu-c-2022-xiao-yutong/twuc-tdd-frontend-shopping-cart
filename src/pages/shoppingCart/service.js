import apiHelper from '../../utils/apiHelper';
import { BASE_URL } from '../../constants';

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
