import React from "react";
import { useSelector } from "react-redux";

import Item from "../Item/Item";
import styles from "./Items.module.scss";

export default function Items() {
	const state = useSelector(({ items: { items, isLoaded } }) => {
		return {
			items,
			isLoaded,
		};
	});

	return (
		<div className={styles.items}>
			{state.items &&
				state.items.map(({ token, logo, website, login, password }) => {
					console.log(token);
					return(
					<Item
						key={token}
						logo={logo}
						website={website}
						login={login}
						password={password}
					/>
				)})}
		</div>
	);
}
