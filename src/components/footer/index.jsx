import React from 'react';
import './index.css';

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <a className="link" href="/contact">Contact Us</a>
                <a className="link" href="/about">About Us</a>
            </footer>
        );
    }

}

export default Footer;
