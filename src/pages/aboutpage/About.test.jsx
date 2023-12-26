import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('About page', () => {
    render(<About />);
    expect(screen.getByText(/My name is/i)).toBeInTheDocument();
});
