import { getData } from "../../../service/service";

export const getProducts = async () => {
  try {
    const data = await getData();
    return data.products;
  } catch (e) {
    return [];
  }
};
