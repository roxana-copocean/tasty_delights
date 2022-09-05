import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartBtn.module.css';
import CartIcon from '../../Cart/CartIcon';
import CardContext from '../../../store/cart-context';

export default function HeaderCartBtn(props) {
	const [ btnEffect, setBtnEffect ] = useState(false);
	const context = useContext(CardContext);
	const numberOfCartItems = context.items.reduce((currentNumber, item) => {
		return currentNumber + item.amount;
	}, 0);

	const { items } = context;
	const btnClasses = `${styles.button} ${btnEffect ? styles.bump : ''}`;
	useEffect(
		() => {
			if (items.length === 0) {
				return;
			}
			setBtnEffect(true);
			const timer = setTimeout(() => {
				setBtnEffect(false);
			}, 300);

			return () => {
				clearTimeout(timer);
			};
		},
		[ items ]
	);
	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
}
