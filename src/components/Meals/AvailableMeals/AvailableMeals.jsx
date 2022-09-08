import React, { useEffect, useState } from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

function AvailableMeals() {
	const [ meals, setMeals ] = useState([]);

	// getting the data
	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				'https://tasty-delights-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
			);
			const data = await response.json();

			// transforming our data into an array
			const loadedMeals = [];
			for (const key in data) {
				loadedMeals.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price
				});
			}
			setMeals(loadedMeals);
		};
		fetchMeals();
	}, []);

	const mealsList = meals.map((meal) => {
		return (
			<MealItem key={meal.id} price={meal.price} description={meal.description} name={meal.name} id={meal.id} />
		);
	});
	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
}

export default AvailableMeals;
