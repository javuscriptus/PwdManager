import React from 'react';

export default function ItemInfo() {
	return (
		<div className='site-info'>
			<h1>Gmail (javuscriptus911)</h1>
			<form>
				<input type='text' value={'website'} />
				<input type='text' value={'email@email.com'} />
				<input type='text' value={'username'} />
				<input type='password' value={'password'} />
			</form>
			<div className='info'>
				<p>
					Модифицирован: <span>02.01.2022 в 17:22</span>
				</p>
				<p>
					Создан: <span>01.01.2022 в 12:05</span>
				</p>
			</div>
		</div>
	);
}
