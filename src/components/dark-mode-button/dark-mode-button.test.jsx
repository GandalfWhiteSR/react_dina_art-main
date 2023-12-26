// dark-mode-button.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeButton from './DarkModeButton';

test('renders DarkModeButton component with correct content', () => {
    const isNight = true; // Provide the initial state of the button
    const handleHamburger = jest.fn();
    const handleChange = jest.fn();

    render(<DarkModeButton isNight={isNight} handleHamburger={handleHamburger} handleChange={handleChange} />);

    const checkbox = screen.getByTestId('dark-mode-checkbox');

    // Check if the checkbox is rendered with the correct initial state
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(isNight);

    // Simulate a click event on the checkbox and check if the handler functions are called
    fireEvent.click(checkbox);
    expect(handleHamburger).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalled();
});
