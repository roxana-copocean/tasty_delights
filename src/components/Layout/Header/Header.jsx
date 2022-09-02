import React from 'react';
import imgMeal from '../../../assets/img.jpg';
import styles from './Header.module.css';
import HeaderCartBtn from '../HeaderCartButton/HeaderCartBtn';

function Header(props) {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<h1>🥑 Tasty Delights</h1>
				<HeaderCartBtn onClick={props.onShowCart} />
			</header>
			<div className={styles['main-image']}>
				<img src={imgMeal} alt="meal" />
			</div>
		</React.Fragment>
	);
}

export default Header;
