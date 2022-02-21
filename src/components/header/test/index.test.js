import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Header from '../index';

test('Header', () => {
    const {getByText} = render(<Header />);
    expect(getByText('Thoughtworks Mall')).toBeInTheDocument();
});
