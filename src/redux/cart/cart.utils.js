export const addItemToCart = (cartItems, itemToTheCart) => {
    if (cartItems !== null || cartItems !== undefined) {
        const itemInTheCart = cartItems.find(cartItem =>
            (cartItem.id === itemToTheCart.id));

        if (itemInTheCart) {
            return cartItems;
        }
    }
    return [...cartItems, itemToTheCart];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const itemInTheCart = cartItems.find(cartItem =>
        cartItem.id === itemToRemove.id
    );

    if (itemInTheCart) {
        return cartItems.filter((cartItem) =>
            cartItem.id !== itemToRemove.id
        );
    }
};