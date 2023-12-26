// hamburger-icon.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HamburgerIcon from './HamburgerIcon';

test('renders HamburgerIcon component with correct content', () => {
    const menu = false; // Provide the initial state of the menu
    const handleHamburger = jest.fn();

    render(<HamburgerIcon menu={menu} handleHamburger={handleHamburger} />);

    const hamburgerIcon = screen.getByTestId('hamburger-icon');

    // Check if the component is rendered with the correct initial state
    expect(hamburgerIcon).toBeInTheDocument();
    expect(hamburgerIcon).toHaveClass('hamburger');
    expect(hamburgerIcon).not.toHaveClass('X');

    // Simulate a click event on the hamburger icon and check if the handler function is called
    fireEvent.click(hamburgerIcon);
    expect(handleHamburger).toHaveBeenCalled();

    // You can add more specific tests based on the content and behavior of your component
});
