// shopping-item.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ShoppingItem from './ShoppingItem';

const mockStore = configureStore([]);

test('renders ShoppingItem component with correct content and calls removeItem', () => {
    const item = {
        id: 1,
        img: 'item.jpg',
        dimention: 'Item Dimension',
        price: 10,
    };

    const store = mockStore({});

    render(
        <Provider store={store}>
            <ShoppingItem item={item} />
        </Provider>
    );

    const itemImage = screen.getByAltText('item');
    const itemDimension = screen.getByText('Item Dimension');
    const itemPrice = screen.getByText('10 €');
    const removeButton = screen.getByTestId('remove-button');

    // Check if the component is rendered with the correct content
    expect(itemImage).toBeInTheDocument();
    expect(itemDimension).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();

    // Simulate a click event on the remove button and check if the removeItem action is called
    fireEvent.click(removeButton);
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual({ type: 'REMOVE_ITEM', payload: item });
});

