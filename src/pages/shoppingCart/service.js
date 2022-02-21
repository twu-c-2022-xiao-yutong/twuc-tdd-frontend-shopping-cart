import apiHelper from '../../utils/apiHelper';

export const getProducts = async (url) => {
    try {
        const { data } = await apiHelper.get(url);
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
