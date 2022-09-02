import React, { useReducer } from 'react';

import CardContext from './cart-context';

// Our default Cart state and our reducer function

const defaultCartState = {
	items: [],
	totalAmount: 0
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
		const existingCardItem = state.items[existingCartItemIndex];

		let updatedItems;

		if (existingCardItem) {
			const updatedItem = {
				...existingCardItem,
				amount: existingCardItem.amount + action.item.amount
			};
			updatedItems = [ ...state.items ];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		};
	}
	return defaultCartState;
};

// our CartProvider

function CartProvider(props) {
	const [ cartState, dispatchCartAction ] = useReducer(cartReducer, defaultCartState);

	const addItemToCardHandler = (item) => {
		dispatchCartAction({
			type: 'ADD',
			item: item
		});
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({
			type: 'REMOVE',
			id: id
		});
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCardHandler,
		removeItem: removeItemFromCartHandler
	};
	return <CardContext.Provider value={cartContext}>{props.children}</CardContext.Provider>;
}

export default CartProvider;
