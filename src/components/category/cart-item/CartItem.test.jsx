// cart-item.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CartItem from './CartItem';

const mockStore = configureStore([]);

test('renders CartItem component with correct content', () => {
    const items = [
        { id: 1, dimention: 'Dimension 1', img: 'path/to/image1.jpg', price: 10 },
        { id: 2, dimention: 'Dimension 2', img: 'path/to/image2.jpg', price: 20 },
        // Add more mock items as needed
    ];

    const store = mockStore({ cart: { items } });

    render(
        <Provider store={store}>
            <CartItem />
        </Provider>
    );

    // Test for the presence of specific elements or text within the component
    expect(screen.getByText(/Dimension 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Dimension 2/i)).toBeInTheDocument();
    expect(screen.getByText(/10 €/i)).toBeInTheDocument();
    expect(screen.getByText(/20 €/i)).toBeInTheDocument();

    // Test button click
    userEvent.click(screen.getByRole('button', { name: /10 €/i }));
    // Add more specific tests based on the content and behavior of your component
});
