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

  export default generateRandomString;