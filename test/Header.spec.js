import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Header from '../src/components/Header';

test('Header', () => {
    const {getByText} = render(<Header />);
    expect(getByText('Shopping Cart')).toBeInTheDocument();
});