import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';

jest.mock('axios');

test('App', () => {
    const { getByText } = render(<App />);
    expect(getByText('Thoughtworks Mall')).toBeInTheDocument();
});
