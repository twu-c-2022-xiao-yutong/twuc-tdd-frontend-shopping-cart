import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Main>
                    <ShoppingCart />
                </Main>
                <Footer />
            </>
        );
    }
}

export default App;
