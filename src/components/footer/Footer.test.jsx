// footer.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component with correct content', () => {
    render(<Footer />);

    // Test for the presence of specific elements or text within the component
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`${currentYear} DINA ART.`)).toBeInTheDocument();

    // You can add more specific tests based on the content and behavior of your component
});
