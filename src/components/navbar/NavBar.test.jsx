// navbar.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Navbar from './Navbar';

const mockStore = configureStore([]);

test('renders Navbar component with correct content', () => {
    const cartItems = [
        { id: 1, name: 'Item 1', price: 10 },
        // Add more mock cart items as needed
    ];

    const store = mockStore({ cart: { cartItems } });

    render(
        <Router>
            <Provider store={store}>
                <Navbar />
            </Provider>
        </Router>
    );

    const logoImage = screen.getByAltText("Dina's logo");
    const homeLink = screen.getByText(/HOME/i);
    const shopLink = screen.getByText(/SHOP/i);
    const aboutLink = screen.getByText(/ABOUT/i);
    const cartLink = screen.getByText(/CART/i);

    // Check if the component is rendered with the correct content
    expect(logoImage).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();

    // Simulate a click event on the cart link and check if it navigates to the correct route
    fireEvent.click(cartLink);
    expect(window.location.pathname).toBe('/cart');

    // You can add more specific tests based on the content and behavior of your component
});
