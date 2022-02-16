import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Main from '../src/components/Main';

test('Main', () => {
    const {getByText} = render(<Main />);
    expect(getByText('商品名称')).toBeInTheDocument();
});