import React, { useEffect, useState } from "react";
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
          {products.map((product) => (
            <tr key={product.id} className="table-row product">
              <td className="table-cell align-left">{product.name}</td>
              <td className="table-cell align-left">{product.price}</td>
              <td className="table-cell align-left">{product.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
