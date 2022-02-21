import React from 'react';
import './index.css';
import { calculateTotalPrice, getProducts, pay } from './service';
import ProductTable from './components/productTable';
import Button from '../../components/button';
import { ORDER_STATUS } from '../../constants';


class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            total: 0,
            status: undefined
        };
    }

    componentDidMount() {
        getProducts().then((products) => {
            const total = calculateTotalPrice(products);
            this.setState({ products, total });
        });
    }

    handlePay() {
        pay().then(({ status }) => {
            this.setState({ status });
        });
    }

    render() {
        return (
            <div  className="wrapper">
                <div className="title">Shopping Cart</div>
                <ProductTable products={this.state.products} />
                <div className="operation">
                    <div className="total">合计：{this.state.total.toFixed(2)}</div>
                    <Button onClick={() => this.handlePay()}>支 付</Button>
                </div>
                {this.state.status && (
                    <div>{this.state.status === ORDER_STATUS.PAID ? '支付成功' : '支付失败'}</div>
                )}
            </div>
        );
    }
}

export default ShoppingCart;
