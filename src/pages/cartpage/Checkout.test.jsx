// Checkout.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // You may need to install this package

import Checkout from './Checkout';

// Mock the Redux store
const mockStore = configureStore([]);
const store = mockStore({
    cart: {
        cartItems: [
            { id: 1, name: 'Item 1', price: 10 },
            { id: 2, name: 'Item 2', price: 20 },
            // Add more mock cart items as needed
        ],
    },
});

test('renders the Checkout component with correct content', () => {
    render(
        <Provider store={store}>
            <Checkout />
        </Provider>
    );

    // Test for the presence of specific elements or text within the component
    expect(screen.getByText(/SHOPPING LIST/i)).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    expect(screen.getByText(/Please use the following test credit card for payments/i)).toBeInTheDocument();

    // You can add more specific tests based on the content of your component
});
