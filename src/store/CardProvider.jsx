import React, { useReducer } from 'react';

import CardContext from './cart-context';

// Our default Cart state and our reducer function
const defaultCartState = {
	items: [],
	totalAmount: 0
};

// ---------------------------------------------------------------------------------------
const cartReducer = (state, action) => {
	// ADD
	if (action.type === 'ADD') {
		// updating the total amount
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

		// checking for the same item with the same id
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
	// REMOVE
	if (action.type === 'REMOVE') {
		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
		const existingCardItem = state.items[existingCartItemIndex];

		const updatedTotalAmount = state.totalAmount - existingCardItem.price;
		let updatedItems;
		// if it's the last item
		if (existingCardItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updatedItem = { ...existingCardItem, amount: existingCardItem.amount - 1 };
			updatedItems = [ ...state.items ];
			updatedItems[existingCartItemIndex] = updatedItem;
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		};
	}
	// CLEAR
	if (action.type === 'CLEAR') {
		return defaultCartState;
	}
	return defaultCartState;
};

// ---------------------------------------------------------------------------------------

// CartProvider
function CartProvider(props) {
	const [ cartState, dispatchCartAction ] = useReducer(cartReducer, defaultCartState);

	// add item handler - addItem
	const addItemToCardHandler = (item) => {
		dispatchCartAction({
			type: 'ADD',
			item: item
		});
	};

	// remove item handler- removeItem
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({
			type: 'REMOVE',
			id: id
		});
	};

	// clear cart handler- clearCart
	const clearTheCartHandler = () => {
		dispatchCartAction({ type: 'CLEAR' });
	};

	// The value for the Provider
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCardHandler,
		removeItem: removeItemFromCartHandler,
		clearCart: clearTheCartHandler
	};
	return <CardContext.Provider value={cartContext}>{props.children}</CardContext.Provider>;
}

export default CartProvider;
