import axios from "axios";
import { getData } from "./service";
import { GET_DATA } from "./api";
import products from "../mockData/products.json";

jest.mock("axios");

describe("Service", () => {
  test("should send request to get data when call getData", async () => {
    const data = {
      products,
    };
    axios.get.mockResolvedValue({ data });

    const actual = await getData();

    expect(actual).toEqual(data);
    expect(axios.get).toBeCalledWith(GET_DATA);
  });
});
