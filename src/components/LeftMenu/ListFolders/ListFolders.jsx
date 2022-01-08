import React from "react";
import styles from "./ListFolders.module.scss";

export default function ListFolders() {
	return (
		<div className={styles.folders}>
			<span>Папки</span>
			<ul>
				<li>Создать новую папку</li>
				<li>Название папки</li>
				<li>Название папки</li>
				<li>Название папки</li>
				<li>Название папки</li>
			</ul>
		</div>
	);
}
