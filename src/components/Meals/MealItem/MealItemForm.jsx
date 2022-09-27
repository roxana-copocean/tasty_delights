import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';

function MealItemForm(props) {
	const [ amountIsValid, setAmountIsValid ] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		// converting the value to a number
		const enteredAmountNumber = +enteredAmount;

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					type: 'number',
					id: 'amount',
					min: '1',
					max: '5',
					step: '1',
					default: '1'
				}}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p className={styles.invalid}>Enter a valid amount!(1 - 5)</p>}
		</form>
	);
}

export default MealItemForm;
