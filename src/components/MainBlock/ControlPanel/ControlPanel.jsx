import React, { useState } from "react";
import AddItem from "../../Modal/AddItem/AddItem";

import Modal from "../../Modal/Modal";
import styles from "./ControlPanel.module.scss";

export default function ControlPanel() {
	const [showAddItemModal, setShowAddItemModal] = useState(false);

	return (
		<>
			<div className={styles.control}>
				<input type="text" placeholder="Поиск" />
				<button onClick={() => setShowAddItemModal(true)}>
					Добавить новый
				</button>
			</div>

			<Modal active={showAddItemModal} setActive={setShowAddItemModal}>
				<AddItem />
			</Modal>
		</>
	);
}
