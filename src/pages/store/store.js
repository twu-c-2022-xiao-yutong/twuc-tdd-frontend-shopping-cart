import {getData} from '../../service/service';

export const getProducts = async () => {
  try {
    const { products } = await getData();
    return products;
  }
  catch(err) {
    return [];
  }
};