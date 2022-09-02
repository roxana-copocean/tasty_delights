import React, { useState } from 'react';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart/Cart';
import CardProvider from './store/CardProvider';
function App() {
	const [ cartIsShown, setCartIsShown ] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCarthandler = () => {
		setCartIsShown(false);
	};
	return (
		<CardProvider>
			{cartIsShown && <Cart onCloseCart={hideCarthandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CardProvider>
	);
}

export default App;
