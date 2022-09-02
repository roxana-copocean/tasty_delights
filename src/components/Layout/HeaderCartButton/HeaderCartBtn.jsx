import React, { useContext } from 'react';
import styles from './HeaderCartBtn.module.css';
import CartIcon from '../../Cart/CartIcon';
import CardContext from '../../../store/cart-context';

export default function HeaderCartBtn(props) {
	const context = useContext(CardContext);
	const numberOfCartItems = context.items.reduce((currentNumber, item) => {
		return currentNumber + item.amount;
	}, 0);
	return (
		<button className={styles.button} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
}
