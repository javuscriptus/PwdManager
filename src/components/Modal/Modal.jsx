import React from "react";
import classnames from "classnames";

import styles from "./Modal.module.scss";

export default function Modal({ active, setActive, children }) {
	return (
		<div
			className={
				active ? classnames(styles.active, styles.modal) : styles.modal
			}
			onClick={() => setActive(false)}
		>
			<div
				className={
					active ? classnames(styles.active, styles.content) : styles.content
				}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
}
