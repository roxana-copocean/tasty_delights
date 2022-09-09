import React, { useRef, useState } from 'react';
import styles from './Checkout.module.css';

function Checkout(props) {
	const [ formInputsValidity, setFormInputsValidity ] = useState({
		name: true,
		street: true,
		postalCode: true,
		city: true
	});
	// refs for the inputs
	const nameRef = useRef();
	const streetRef = useRef();
	const postalCodeRef = useRef();
	const cityRef = useRef();

	// helper functions to check for validity
	const isEmpty = (value) => value.trim() === '';
	const lessThanFiveChars = (value) => value.trim().length !== 5;

	// submit the form
	const confirmHandler = (event) => {
		event.preventDefault();

		// getting the values from the refs
		const eneteredName = nameRef.current.value;
		const eneteredStreet = streetRef.current.value;
		const eneteredPostalCode = postalCodeRef.current.value;
		const eneteredCity = cityRef.current.value;

		// check for validity
		const nameIsValid = eneteredName.trim() !== '';
		const streetIsValid = !isEmpty(eneteredStreet);
		const postalCodeIsValid = !lessThanFiveChars(eneteredPostalCode);
		const cityIsValid = !isEmpty(eneteredCity);

		setFormInputsValidity({
			name: nameIsValid,
			street: streetIsValid,
			postalCode: postalCodeIsValid,
			city: cityIsValid
		});

		// validating the form
		const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;
		if (!formIsValid) {
			return;
		}
	};
	return (
		<form onSubmit={confirmHandler} className={styles.form}>
			<div className={`${styles.control} ${formInputsValidity.name ? '' : styles.invalid}`}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameRef} />
				{!formInputsValidity.name && <p>Enter a valid name!</p>}
			</div>
			<div className={`${styles.control} ${formInputsValidity.street ? '' : styles.invalid}`}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetRef} />
				{!formInputsValidity.street && <p>Enter a valid street!</p>}
			</div>
			<div className={`${styles.control} ${formInputsValidity.postalCode ? '' : styles.invalid}`}>
				<label htmlFor="postalCode">Postal Code</label>
				<input type="text" id="postalCode" ref={postalCodeRef} />
				{!formInputsValidity.postalCode && <p>Enter a valid postal code!</p>}
			</div>
			<div className={`${styles.control} ${formInputsValidity.city ? '' : styles.invalid}`}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityRef} />
				{!formInputsValidity.city && <p>Enter a valid city!</p>}
			</div>
			<div className={styles.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={styles.submit} type="submit">
					Confirm
				</button>
			</div>
		</form>
	);
}

export default Checkout;
