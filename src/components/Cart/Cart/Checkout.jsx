import React, { useRef, useState } from 'react';
import styles from './Checkout.module.css';

// Checkout
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
	const lessThanSixChars = (value) => value.trim().length !== 6;

	// ----------------------------------------------------------------------------
	// submit the form
	const confirmHandler = (event) => {
		event.preventDefault();

		// getting the values from the refs
		const eneteredName = nameRef.current.value;
		const eneteredStreet = streetRef.current.value;
		const eneteredPostalCode = postalCodeRef.current.value;
		const eneteredCity = cityRef.current.value;

		// check for validity
		const nameIsValid = !isEmpty(eneteredName);
		const streetIsValid = !isEmpty(eneteredStreet);
		const postalCodeIsValid = !lessThanSixChars(eneteredPostalCode);
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

		// calling the onSubmit prop, and giving it the user data we collected
		props.onSubmit({
			name: eneteredName,
			street: eneteredStreet,
			postalCode: eneteredPostalCode,
			city: eneteredCity
		});
	};
	return (
		<form onSubmit={confirmHandler} className={styles.form}>
			{/*Name  */}
			<div className={`${styles.control} ${formInputsValidity.name ? '' : styles.invalid}`}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameRef} />
				{!formInputsValidity.name && <p className={styles.invalidInput}>Enter a valid name!</p>}
			</div>

			{/* Street */}
			<div className={`${styles.control} ${formInputsValidity.street ? '' : styles.invalid}`}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetRef} />
				{!formInputsValidity.street && <p className={styles.invalidInput}>Enter a valid street!</p>}
			</div>

			{/* Postal Code */}
			<div className={`${styles.control} ${formInputsValidity.postalCode ? '' : styles.invalid}`}>
				<label htmlFor="postalCode">Postal Code</label>
				<input type="text" id="postalCode" ref={postalCodeRef} />
				{!formInputsValidity.postalCode && <p className={styles.invalidInput}>Enter a valid postal code!</p>}
			</div>

			{/* City */}
			<div className={`${styles.control} ${formInputsValidity.city ? '' : styles.invalid}`}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityRef} />
				{!formInputsValidity.city && <p className={styles.invalidInput}>Enter a valid city!</p>}
			</div>

			{/* Actions */}
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
