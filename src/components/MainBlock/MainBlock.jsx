import React from "react";
import ControlPanel from "./ControlPanel/ControlPanel";
import Items from "./Items/Items";
import styles from "./MainBlock.module.scss"

export default function MainBlock() {
	return (
		<div className={styles.main}>
			<ControlPanel />
			<Items />
		</div>
	);
}
