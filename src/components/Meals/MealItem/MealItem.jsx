import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CardContext from '../../../store/cart-context';

function MealItem(props) {
	const context = useContext(CardContext);
	const price = `$${props.price.toFixed(2)}`;

	const addToCartHandler = (amount) => {
		context.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price
		});
	};
	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.price}>{price}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
}

export default MealItem;
