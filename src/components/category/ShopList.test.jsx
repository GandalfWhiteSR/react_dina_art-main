// shoplist.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ShopList from './ShopList';

const mockStore = configureStore([]);

test('renders ShopList component with correct content', () => {
    const shopListData = [
        { Category1: [{ id: 1, name: 'Item 1', price: 10 }] },
        { Category2: [{ id: 2, name: 'Item 2', price: 20 }] },
        // Add more mock data as needed
    ];

    const store = mockStore({ shopList: shopListData });

    render(
        <Provider store={store}>
            <ShopList />
        </Provider>
    );

    // Test for the presence of specific elements or text within the component
    expect(screen.getByText(/Category1/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/10 €/i)).toBeInTheDocument();

    expect(screen.getByText(/Category2/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 2/i)).toBeInTheDocument();
    expect(screen.getByText(/20 €/i)).toBeInTheDocument();

    // Add more specific tests based on the content and behavior of your component
});
