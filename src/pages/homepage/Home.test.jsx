// Assuming you have the necessary imports at the top of your test file
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home.jsx';

test('Home', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/Welcome to Dina's Canvas Art studio./i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders images in the "portrets" section', () => {
    render(<Home />);
    const portraitImages = screen.getAllByAltText(/portrait/i);
    expect(portraitImages.length).toBe(3);
  });

  it('renders the "I make an Abstract art!" message', () => {
    render(<Home />);
    const abstractArtMessage = screen.getByText(/I make an Abstract art!/i);
    expect(abstractArtMessage).toBeInTheDocument();
  });

  // Add more tests for other sections and elements as needed
});
