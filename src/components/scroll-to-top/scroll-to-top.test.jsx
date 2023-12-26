// scroll-to-top.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

test('renders ScrollToTop component and scrolls to the top on route change', () => {
    const { container } = render(
        <MemoryRouter initialEntries={['/initial-route']}>
            <ScrollToTop />
        </MemoryRouter>
    );

    // Mock window.scrollTo method
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;

    // Change the route and check if window.scrollTo is called with (0, 0)
    render(
        <MemoryRouter initialEntries={['/new-route']}>
            <ScrollToTop />
        </MemoryRouter>,
        { container }
    );

    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
});

