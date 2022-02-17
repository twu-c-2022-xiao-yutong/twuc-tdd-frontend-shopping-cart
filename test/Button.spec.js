import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Button from '../src/components/Button';

describe('Button', () => {
    test('should have text', () => {
        const { getByText } = render(<Button text={'支 付'}/>);
        expect(getByText('支 付')).toBeInTheDocument();
    });

    test('should be disabled', () => {
        render(<Button disabled={true} text={'支 付'} />);
        expect(screen.getByRole('button')).toBeDisabled();
    });
});
