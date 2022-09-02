import React from 'react';
import MealsSummary from './MealsSummary/MealsSummary';
import AvailableMeals from './AvailableMeals/AvailableMeals';

function Meals() {
	return (
		<React.Fragment>
			<MealsSummary />
			<AvailableMeals />
		</React.Fragment>
	);
}

export default Meals;
