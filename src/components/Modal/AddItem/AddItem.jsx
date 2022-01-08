import React from "react";
import { useForm } from "react-hook-form";
import { FcQuestions } from "react-icons/fc";
import { useDispatch } from "react-redux";

import { addItem } from "../../../redux/actions/itemAction";
import styles from "./AddItem.module.scss";

export default function AddItem() {
	const dispatch = useDispatch();

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const generateRandomString = (length = 5) => {
		const chars =
			"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let randomString = "";

		for (var i = 0; i <= length; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length);
			randomString += chars.substring(randomNumber, randomNumber + 1);
		}
		return randomString;
	};

	const onSubmit = data => {
		const randomToken = generateRandomString();
		const { token = randomToken, logo = "", website, login, password } = data;
		dispatch(addItem({ token, logo, website, login, password }));
		reset();
	};

	return (
		<form className={styles.add} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.inputWrapper}>
				<label htmlFor="website">Сайт</label>
				<input id="website" {...register("website", { required: true })} />
				{errors.website?.type === "required" &&
					"Поле с сайтом обязательно для заполнения!"}
			</div>

			<div className={styles.inputWrapper}>
				<label htmlFor="login">Логин\Почта</label>
				<input id="login" {...register("login", { required: true })} />
				{errors.login && "Поле с логином обязательно для заполнения!"}
			</div>

			<div className={styles.inputWrapper}>
				<label htmlFor="pwd">Пароль</label>
				<div className={styles.inputGroup}>
					<input id="pwd" {...register("password", { required: true })} />
					<FcQuestions />
				</div>
				{errors.password && "Поле с паролем обязательно для заполнения!"}
			</div>

			<input type="submit" />
		</form>
	);
}
