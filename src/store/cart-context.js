import React from 'react';

const CardContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
	clearCart: () => {}
});

export default CardContext;
