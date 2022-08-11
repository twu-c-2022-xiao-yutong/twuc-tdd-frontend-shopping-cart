import { getData } from "../../../service/service";
import { getProducts } from "./store";
import products from "../../../mockData/products.json";

jest.mock("../../../service/service");

describe("Store", () => {
  test("Should get product list when call getProducts", async () => {
    getData.mockResolvedValue({ products });

    const actual = await getProducts();

    expect(actual).toEqual(products);
  });

  test("Should return empty product list when call getProducts, given request failed", async () => {
    getData.mockRejectedValue(new Error("Error"));

    const actual = await getProducts();

    expect(actual).toEqual([]);
  });
});
