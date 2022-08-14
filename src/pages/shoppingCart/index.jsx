import React, { useState, useEffect } from "react";
import "./index.css";
import { getProducts } from "./store/store";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="title">Shopping Cart</div>

      <table className="table">
        <thead className="table-header">
          <tr className="table-row">
            <th className="table-cell align-left">商品名称</th>
            <th className="table-cell align-left">单价</th>
            <th className="table-cell align-left">数量</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            return (
              <tr className="table-row product" key={product.id}>
                <td className="table-cell align-left">{product.name}</td>
                <td className="table-cell align-left">{product.price}</td>
                <td className="table-cell align-left">{product.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
