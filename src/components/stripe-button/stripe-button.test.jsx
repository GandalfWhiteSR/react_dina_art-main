// stripe-checkout-button.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StripeCheckoutButton from './StripeCheckoutButton';

const mockStore = configureStore([]);

test('renders StripeCheckoutButton component with correct content', () => {
    const price = 20; // Replace with your desired price
    const cartItems = [
        { id: 1, name: 'Item 1', price: 10 },
        // Add more mock cart items as needed
    ];

    const store = mockStore({ cart: { cartItems } });

    render(
        <Provider store={store}>
            <StripeCheckoutButton price={price} cartItems={cartItems} />
        </Provider>
    );

    const payWithCardLabel = screen.getByText(/Pay with 💳/i);
    const logoImage = screen.getByAltText("DINA ART");
    const descriptionText = screen.getByText(`Your total is ${price}€`);
    const payNowLabel = screen.getByText(/Pay Now/i);

    // Check if the component is rendered with the correct content
    expect(payWithCardLabel).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
    expect(payNowLabel).toBeInTheDocument();
});

// You can add more tests to simulate the token callback if needed
