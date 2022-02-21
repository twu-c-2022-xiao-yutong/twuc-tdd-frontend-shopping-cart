import React from 'react';
import './index.css';

class ProductTable extends React.Component {
    render() {
        return (
            <table className="table">
                <thead className="table-row table-header">
                    <tr>
                        <th className="table-cell align-left">商品名称</th>
                        <th className="table-cell align-right">单 价</th>
                        <th className="table-cell align-right">数 量</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products && this.props.products.map(
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
        );
    }
}

export default ProductTable;
