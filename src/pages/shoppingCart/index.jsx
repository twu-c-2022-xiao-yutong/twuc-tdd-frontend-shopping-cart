import React from 'react';
import './index.css';
import { calculateTotalPrice, getProducts } from './service';


class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            total: 0,
        };
    }

    componentDidMount() {
        getProducts().then((products) => {
            const total = calculateTotalPrice(products);
            this.setState({ products, total });
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
