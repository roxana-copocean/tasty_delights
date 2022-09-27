import React from 'react';
import imgMeal from '../../../assets/img.jpg';
import styles from './Header.module.css';
import HeaderCartBtn from '../HeaderCartButton/HeaderCartBtn';

// The Header
function Header(props) {
	return (
		<React.Fragment>
			{/* The logo and the Cart Btn */}
			<header className={styles.header}>
				<h1>🥑 Tasty Delights</h1>
				<HeaderCartBtn onClick={props.onShowCart} />
			</header>
			{/* the hero image */}
			<div className={styles['main-image']}>
				<img src={imgMeal} alt="A table full of delicious food!" />
			</div>
		</React.Fragment>
	);
}

export default Header;
