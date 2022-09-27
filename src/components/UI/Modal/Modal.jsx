import React from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

// this will use a "onCloseCart handler", that it gets from the App
const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onCloseCart} />;
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

function Modal(props) {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, document.getElementById('overlays'))}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
		</React.Fragment>
	);
}

export default Modal;
