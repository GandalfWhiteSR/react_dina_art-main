import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home.jsx";

test("renders the welcome message", () => {
  render(<Home />);
  const welcomeMessage = screen.getByText(
    /Welcome to Dina's Canvas Art studio./i
  );
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders images in the "portrets" section', () => {
  render(<Home />);
  const portraitImages = screen.getAllByAltText(/portrait/i);
  expect(portraitImages.length).toBe(3);
});

test('renders the "I make an Abstract art!" message', () => {
  render(<Home />);
  const abstractArtMessage = screen.getByText(/I make an Abstract art!/i);
  expect(abstractArtMessage).toBeInTheDocument();
});