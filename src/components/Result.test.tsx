import React from 'react';
import { render, screen } from '@testing-library/react';
import Result from './Result';

test('label existence test', () => {
    render(<Result />);
    const Label = screen.getByText(/Place name: /i);
    expect(Label).toBeInTheDocument();
});
