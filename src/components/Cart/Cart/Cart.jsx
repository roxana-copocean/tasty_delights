import React, { useContext, useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import styles from './Cart.module.css';
import CardContext from '../../../store/cart-context';
import CartItem from '../CartItem/CartItem';
import Checkout from './Checkout';

function Cart(props) {
	const [ showOrder, setShowOrder ] = useState(false);
	const context = useContext(CardContext);
	const totalAmount = `$${context.totalAmount.toFixed(2)}`;
	const hasItems = context.items.length > 0;

	const cartItemRemoveHnadler = (id) => {
		context.removeItem(id);
	};

	const cartItemAddedHandler = (item) => {
		context.addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setShowOrder(true);
	};

	const submitOrderHandler = (userData) => {
		fetch('https://tasty-delights-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
			method: 'POST',
			body: JSON.stringify({
				user: userData,
				orderedItems: context.items
			})
		});
	};

	// storing the modal actions inside a variable
	const modalActions = (
		<div className={styles.actions}>
			<button className={styles['button--alt']} onClick={props.onCloseCart}>
				Close
			</button>
			{hasItems && (
				<button className={styles.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);
	const cartItems = (
		<ul className={styles['cart-items']}>
			{context.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHnadler.bind(null, item.id)}
					onAdd={cartItemAddedHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	return (
		<Modal onCloseCart={props.onCloseCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{/* conditionally rendering the Checkout */}
			{showOrder && <Checkout onCancel={props.onCloseCart} onSubmit={submitOrderHandler} />}
			{/* conditionally rendering the modal actions */}
			{!showOrder && modalActions}
		</Modal>
	);
}

export default Cart;
