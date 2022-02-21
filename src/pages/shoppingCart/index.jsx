import React from 'react';
import './index.css';
import { calculateTotalPrice, getProducts } from './service';
import ProductTable from './components/productTable';


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
                <ProductTable products={this.state.products} />
                <div className="total">合计：{this.state.total.toFixed(2)}</div>
            </div>
        );
    }
}

export default ShoppingCart;
