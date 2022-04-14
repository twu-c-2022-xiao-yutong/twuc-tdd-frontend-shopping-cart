import apiHelper from './apiHelper';
import { GET_PRODUCTS_API } from '../../constants/api';

export const getProducts = async () => {
  try {
    const { data: { products = [] } = {}} = await apiHelper.get(GET_PRODUCTS_API);
    return products;
  } catch (e) {
    return [];
  }
}
