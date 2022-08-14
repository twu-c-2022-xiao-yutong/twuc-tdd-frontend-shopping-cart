import { getByText, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ShoppingCart from "../index";
import products from "../../../mockData/products.json";
import { getProducts } from "../store/store";
jest.mock("../store/store");

describe("Shopping Cart", () => {
  test("should show shopping cart page", () => {
    getProducts.mockResolvedValue([]);
    const { getByText } = render(<ShoppingCart />);

    expect(getByText("Shopping Cart")).toBeInTheDocument();
  });

  test("should show empty cart, given product list is empty", () => {
    getProducts.mockResolvedValue([]);
    const { getByText, container } = render(<ShoppingCart />);

    const products = container.getElementsByClassName("product");

    expect(getByText("商品名称")).toBeTruthy();
    expect(getByText("单价")).toBeTruthy();
    expect(getByText("数量")).toBeTruthy();
    expect(products).toHaveLength(0);
  });

  test("should show product lists on page, given products data", async () => {
    getProducts.mockResolvedValue(products);
    const { container } = render(<ShoppingCart />);

    const actual = container.getElementsByClassName("product");

    await waitFor(() => {
      expect(actual).toHaveLength(products.length);

      Array.from(actual).forEach((productElement, index) => {
        const product = products[index];

        expect(productElement).toHaveTextContent(product.name);
        expect(productElement).toHaveTextContent(product.price);
        expect(productElement).toHaveTextContent(product.count);
      });
    });
  });
});
