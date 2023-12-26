// Arrow.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Arrow from './Arrow';

test('renders the Arrow component with correct content', () => {
    render(<Arrow />);
    const arrowElement = screen.getByTestId('arrow');

    expect(arrowElement).toBeInTheDocument();
    expect(arrowElement.tagName).toBe('DIV');
});
