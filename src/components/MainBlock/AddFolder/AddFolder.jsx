import React from 'react';

export default function AddFolder() {
	return (
		<div>
			<form>
				<label htmlFor='nameFolder'>Название папки</label>
				<input type='text' name='nameFolder' />
			</form>
		</div>
	);
}
