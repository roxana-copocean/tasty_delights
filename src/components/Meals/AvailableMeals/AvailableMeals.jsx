import React from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Armourer’s Dinner',
		description: 'Smocked ham hock with baked beans, onions, pickles',
		price: 42.99
	},
	{
		id: 'm2',
		name: 'Knight’s Favourite',
		description:
			'Pork ribs with barbeque sauce, royal golden potatoes, tomato, cucumber, cabbage, vegetable mix, olives, orange',
		price: 26.5
	},
	{
		id: 'm3',
		name: 'Excalibur Sword',
		description:
			'Chiken, golden royal potatoes, mixed vegetables, olives, tomatos, cucumber, oranges + Excalibur Sword',
		price: 52.99
	},
	{
		id: 'm4',
		name: 'Merchant’s Snack',
		description: 'Bread and dripping, sweet paprika, red onion',
		price: 38.99
	}
];

function AvailableMeals() {
	const mealsList = DUMMY_MEALS.map((meal) => {
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
