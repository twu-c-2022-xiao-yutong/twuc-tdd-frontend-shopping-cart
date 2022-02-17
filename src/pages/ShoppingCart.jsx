import React from 'react';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {

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
                        <tr className="table-row">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShoppingCart;
