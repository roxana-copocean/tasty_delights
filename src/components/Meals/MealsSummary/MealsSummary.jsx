import React from 'react';
import styles from './MealsSummary.module.css';

// Meals Summary
function MealsSummary() {
	return (
		<section className={styles.summary}>
			<h2>Delicious Food, Delivered to You</h2>
			<p>🍉 What are you in the mood for? </p>
			<p>🌮 Order any time, anywhere, and on any device!</p>
		</section>
	);
}

export default MealsSummary;
