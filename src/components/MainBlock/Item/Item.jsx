import React, { useRef, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import styles from "./Item.module.scss";
import gmailImg from "../../../assets/img/gmail.jpg";

function Item(props) {
	return (
		<div className={styles.item}>
			<img
				src={
					props.logo
						? props.logo
						: "https://webstockreview.net/images250_/internet-clipart-web-browser-11.png"
				}
				alt="icon website"
				className={styles.logo}
			/>
			<div className={styles.info}>
				<div className={styles.basic}>
					<span className="website">
						{props.website ? props.website : "Название сайта"}
					</span>
					<span className="login">
						{props.login ? props.login : "Логин от сайта"}
					</span>
				</div>
				<div className={styles.hidden}>
					<span>
						{props.password ? props.password : "Пароль от сайта"}
					</span>
					<AiFillEye />
				</div>
			</div>
			<button> Изменить </button>
			<button> Копировать пароль </button>
			<button> Перейти на сайт </button>
		</div>
	);
}

export default Item;
