import { getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ShoppingCart from "../index";

describe("Shopping Cart", () => {
  test("should show shopping cart page", () => {
    const { getByText } = render(<ShoppingCart />);

    expect(getByText("Shopping Cart")).toBeInTheDocument();
  });

  test("should show empty cart, given product list is empty", () => {
    const { getByText, container } = render(<ShoppingCart />);

    const products = container.getElementsByClassName("product");

    expect(getByText("商品名称")).toBeTruthy();
    expect(getByText("单价")).toBeTruthy();
    expect(getByText("数量")).toBeTruthy();
    expect(products).toHaveLength(0);
  });
});
