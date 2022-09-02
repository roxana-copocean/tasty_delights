import React, { useContext } from 'react';
import Modal from '../../UI/Modal/Modal';
import styles from './Cart.module.css';
import CardContext from '../../../store/cart-context';
import CartItem from '../CartItem/CartItem';

function Cart(props) {
	const context = useContext(CardContext);
	const totalAmount = `$${context.totalAmount.toFixed(2)}`;
	const hasItems = context.items.length > 0;

	const cartItemRemoveHnadler = (id) => {};

	const cartItemAddedHandler = (item) => {};

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
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={props.onCloseCart}>
					Close
				</button>
				{hasItems && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
}

export default Cart;
