import React from 'react';
import './ShoppingCart.css';
import axios from 'axios';
import { BASE_URL } from '../constants';


class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            total: 0,
        };
    }

    componentDidMount() {
        axios.get(BASE_URL).then(({ data }) => {
            if (data) {
                const { products } = data;
                const total = products.reduce(
                    (acc, cur) => acc += cur.price * cur.count, 0
                );
                this.setState({ products, total });
            }
        });
    }

    render() {
        return (
            <div  className="wrapper">
                <div className="title">Shopping Cart</div>
                <table className="table">
                    <thead className="table-row table-header">
                        <tr>
                            <th className="table-cell align-left">商品名称</th>
                            <th className="table-cell align-right">单 价</th>
                            <th className="table-cell align-right">数 量</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products && this.state.products.map(
                            (product) => (
                                <tr className="table-row" key={product.id}>
                                    <td className="table-cell align-left">
                                        {product.name}
                                    </td>
                                    <td className="table-cell align-right">
                                        {product.price.toFixed(2)}
                                    </td>
                                    <td className="table-cell align-right">
                                        {product.count}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                <div className="total">合计：{this.state.total.toFixed(2)}</div>
            </div>
        );
    }
}

export default ShoppingCart;
